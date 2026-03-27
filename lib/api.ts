/**
 * Vilogit API Client
 * Secure, typed client for connecting the Vilogit WEB frontend to the Vilogit BACKEND.
 *
 * Security:
 * - Access tokens stored in local storage and memory
 * - Refresh tokens handled via Supabase auth state
 * - Secure communication with Origin backend
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
  tokens: { accessToken: string };
}

/**
 * viloFetch - Primary secure fetch utility for the Vilogit Origin
 */
export async function viloFetch<T = unknown>(
  path: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  const url = `${baseUrl}/api/v1${path}`;

  // 1. Pull Supabase JWT from local storage or memory
  let token = _accessToken;
  if (!token && typeof window !== 'undefined') {
    // Look for Supabase auth markers in localStorage
    const storageKeys = Object.keys(localStorage);
    const sbKey = storageKeys.find(k => k.startsWith('sb-') && k.endsWith('-auth-token'));
    if (sbKey) {
      try {
        const sbData = JSON.parse(localStorage.getItem(sbKey) || '{}');
        token = sbData.access_token || null;
      } catch (e) {
        console.warn('Failed to parse Supabase token from storage');
      }
    }
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(url, {
      ...options,
      headers,
      credentials: 'include',
    });

    if (!res.ok) {
      let errorData: any;
      try {
        errorData = await res.json();
      } catch {
        errorData = null;
      }
      
      const errMsg = errorData?.message || errorData?.error || `Request failed (${res.status})`;
      console.error(`❌ Vilo Engine Trippin': ${errMsg}`);
      
      return { 
        data: null, 
        error: errMsg, 
        status: res.status 
      };
    }

    const data = await res.json();
    return { 
      data: data?.data ?? data, 
      error: null, 
      status: res.status 
    };
  } catch (err: any) {
    console.error(`❌ Vilo Engine Trippin': ${err.message}`);
    return { 
      data: null, 
      error: err.message, 
      status: 500 
    };
  }
}

// ─── Auth API ─────────────────────────────────────────────────────────────────
export async function login(email: string, password: string): Promise<ApiResponse<AuthResult>> {
  const res = await viloFetch<AuthResult>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  if (res.data?.tokens?.accessToken) {
    setAccessToken(res.data.tokens.accessToken);
  }
  return res;
}

export async function register(
  name: string,
  username: string,
  email: string,
  password: string
): Promise<ApiResponse<AuthResult>> {
  const res = await viloFetch<AuthResult>('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, username, email, password }),
  });
  if (res.data?.tokens?.accessToken) {
    setAccessToken(res.data.tokens.accessToken);
  }
  return res;
}

export async function logout(): Promise<void> {
  try {
    await viloFetch('/auth/logout', { method: 'POST' });
  } catch { /* ignore */ }
  clearAccessToken();
  if (typeof window !== 'undefined') {
    window.location.href = '/login';
  }
}

export async function getMe(): Promise<ApiResponse<User>> {
  return viloFetch<User>('/users/me');
}
