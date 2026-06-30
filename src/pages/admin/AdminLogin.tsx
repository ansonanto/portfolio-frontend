import { useState } from "react";
import { useLocation } from "wouter";
import { Lock } from "lucide-react";
import { useLogin } from "@/api-client";
import { setToken } from "@/lib/adminAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminLogin() {
  const [, navigate] = useLocation();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const login = useLogin();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    login.mutate(
      { data: { password } },
      {
        onSuccess: (res) => {
          setToken(res.token);
          navigate("/admin");
        },
        onError: () => setError("Invalid password."),
      },
    );
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-card/40 p-8"
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
            <Lock className="w-4 h-4 text-primary" />
          </span>
          <h1 className="text-lg font-display font-semibold text-white">
            Admin sign in
          </h1>
        </div>

        <Label htmlFor="password" className="text-sm text-muted-foreground">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          className="mt-2 mb-4"
          placeholder="••••••••"
        />

        {error && <p className="text-sm text-destructive mb-4">{error}</p>}

        <Button
          type="submit"
          className="w-full"
          disabled={login.isPending || password.length === 0}
        >
          {login.isPending ? "Signing in…" : "Sign in"}
        </Button>
      </form>
    </div>
  );
}
