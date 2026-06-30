// The app is served under import.meta.env.BASE_URL ("/" locally, "/portfolio/"
// on Replit). wouter's <Router base> strips that prefix from the location, so
// in-app <Link href> values must NOT include the base — but full anchor hrefs
// and asset URLs do. This helper builds base-aware hrefs for <a> tags and
// assets; for wouter <Link> use plain paths.

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Prefix a root-relative path with the app base (for <a>/assets). */
export function withBase(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${clean}`;
}
