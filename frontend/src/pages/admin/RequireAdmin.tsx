import { useEffect } from "react";
import { useLocation } from "wouter";
import { isLoggedIn } from "@/lib/adminAuth";

/** Redirects to the admin login when no token is stored. */
export function RequireAdmin({ children }: { children: React.ReactNode }) {
  const [, navigate] = useLocation();
  const authed = isLoggedIn();

  useEffect(() => {
    if (!authed) navigate("/admin/login", { replace: true });
  }, [authed, navigate]);

  if (!authed) return null;
  return <>{children}</>;
}
