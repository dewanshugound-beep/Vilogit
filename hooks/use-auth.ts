'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { refreshSession, getAccessToken } from '@/lib/api';

/**
 * useRequireAuth — Protects client-side routes.
 * 
 * 1. On mount: tries to silently restore the session via the refresh-token cookie.
 * 2. If refresh fails and no in-memory access token exists → redirect to /login.
 * 3. Also listens for the global 'auth:expired' event emitted by the API client.
 */
export function useRequireAuth() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const checked = useRef(false);

  useEffect(() => {
    if (checked.current) return;
    checked.current = true;

    async function checkAuth() {
      let token = getAccessToken();

      // If no in-memory token, try silent refresh via httpOnly cookie
      if (!token) {
        const ok = await refreshSession();
        if (!ok) {
          router.replace('/login');
          return;
        }
      }
      setIsLoading(false);
    }

    checkAuth();

    // Listen for token expiry events from the API client
    function onExpired() {
      router.replace('/login');
    }
    window.addEventListener('auth:expired', onExpired);
    return () => window.removeEventListener('auth:expired', onExpired);
  }, [router]);

  return { isLoading };
}

/**
 * useAuth — Returns current user state.
 * Does NOT redirect. Use useRequireAuth for protected pages.
 */
export function useAuth() {
  const [user, setUser] = useState<{ id: string; name: string; username: string; email: string; plan: string; avatarUrl?: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      // Try to restore session
      const ok = await refreshSession();
      if (!ok) { setLoading(false); return; }

      const { getMe } = await import('@/lib/api');
      const res = await getMe();
      if (res.data) setUser(res.data);
      setLoading(false);
    }
    load();
  }, []);

  return { user, loading };
}
