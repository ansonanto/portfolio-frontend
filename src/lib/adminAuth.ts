import { setAuthTokenGetter } from "@/api-client";

const TOKEN_KEY = "admin_token";

/** Read the stored admin JWT (or null). */
export function getToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

/** Persist or clear the admin JWT. */
export function setToken(token: string | null): void {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* ignore storage errors */
  }
}

export function isLoggedIn(): boolean {
  return Boolean(getToken());
}

/**
 * Wire the generated API client to attach the stored admin token as a Bearer
 * header on every request. Call once at app startup.
 */
export function initAdminAuth(): void {
  setAuthTokenGetter(() => getToken());
}
