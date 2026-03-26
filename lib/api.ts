/**
 * Vilogit API Client
 * Secure, typed client for connecting the Vilogit WEB frontend to the Vilogit BACKEND.
 *
 * Security:
 * - Access tokens stored in memory
 * - Refresh tokens stored in httpOnly cookies (handled by backend)
 * - Automatic silent refresh via Next.js proxy
 */

let _accessToken: string | null = null;

export function setAccessToken(token: string) {
  _accessToken = token;
}

export function getAccessToken(): string | null {
  return _accessToken;
}

export function clearAccessToken() {
  _accessToken = null;
}

export interface ApiResponse<T = unknown> {
  data: T | null;
  error: string | null;
  status: number;
}

export interface AuthTokens {
  accessToken: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  username: string;
  avatarUrl?: string;
  role: string;
  status: string;
  plan: string;
  emailVerified: boolean;
  createdAt: string;
}

export interface AuthResult {
  user: User;
  tokens: AuthTokens;
}

async function apiFetch<T = unknown>(
  path: string,
  options: RequestInit = {},
  retry = true
): Promise<ApiResponse<T>> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };

  if (_accessToken) {
    headers['Authorization'] = `Bearer ${_accessToken}`;
  }

  // Target the Next.js local proxy route
  const res = await fetch(`/api/v1${path}`, {
    ...options,
    headers,
    credentials: 'include',
  });

  // Silent token refresh on 401
  if (res.status === 401 && retry) {
    const ok = await silentRefresh();
    if (ok) return apiFetch<T>(path, options, false);
    
    clearAccessToken();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('auth:expired'));
    }
    return { data: null, error: 'Session expired. Please log in again.', status: 401 };
  }

  let data: any;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    const errMsg = data?.message || data?.error || `Request failed (${res.status})`;
    return { data: null, error: errMsg, status: res.status };
  }

  const payload = data?.data ?? data;
  return { data: payload as T, error: null, status: res.status };
}

async function silentRefresh(): Promise<boolean> {
  try {
    const res = await fetch('/api/v1/auth/refresh', {
      method: 'POST',
      credentials: 'include',
    });
    if (!res.ok) return false;
    const json = await res.json();
    const token = json?.data?.accessToken || json?.accessToken;
    if (token) {
      setAccessToken(token);
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

// ─── Auth API ─────────────────────────────────────────────────────────────────
export async function login(email: string, password: string): Promise<ApiResponse<AuthResult>> {
  const res = await apiFetch<AuthResult>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  if (res.data?.tokens?.accessToken) setAccessToken(res.data.tokens.accessToken);
  return res;
}

export async function register(
  name: string,
  username: string,
  email: string,
  password: string
): Promise<ApiResponse<AuthResult>> {
  const res = await apiFetch<AuthResult>('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, username, email, password }),
  });
  if (res.data?.tokens?.accessToken) setAccessToken(res.data.tokens.accessToken);
  return res;
}

export async function logout(): Promise<void> {
  try {
    await apiFetch('/auth/logout', { method: 'POST' });
  } catch { /* ignore */ }
  clearAccessToken();
  if (typeof window !== 'undefined') {
    window.location.href = '/login';
  }
}

export async function refreshSession(): Promise<boolean> {
  return silentRefresh();
}

export async function getMe(): Promise<ApiResponse<User>> {
  return apiFetch<User>('/users/me');
}
