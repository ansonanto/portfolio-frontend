import { setBaseUrl } from "@workspace/api-client-react";

/**
 * Point the API client at the backend.
 *
 * - Dev: leave VITE_API_BASE_URL unset. Requests go to "/api/*" and Vite's dev
 *   proxy forwards them to the local backend (see vite.config.ts).
 * - Production (Vercel): set VITE_API_BASE_URL to the Railway backend origin,
 *   e.g. "https://your-api.up.railway.app". The client then calls that host
 *   directly (CORS on the backend must allow this site's origin).
 *
 * The generated client only prepends the base to paths starting with "/", so
 * the "/api" prefix in each request is preserved.
 */
export function initApiBaseUrl(): void {
  const base = import.meta.env.VITE_API_BASE_URL;
  if (base) {
    setBaseUrl(base.replace(/\/+$/, ""));
  }
}
