"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { loginPublic } from "@/services/auth";
import { mapApiError } from "@/lib/error-messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/features/shared/alert";
import { cn } from "@/lib/utils";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      await loginPublic(email.trim(), password);
      setSuccess(
        "Login UI ready. Authentication will redirect to the Workshop App once backend auth is connected."
      );
    } catch (err) {
      setError(mapApiError(err));
    } finally {
      setIsLoading(false);
    }
  }

  const inputClasses = "bg-white border-slate-300 text-slate-900 focus-visible:ring-teal-600 focus-visible:border-teal-600 rounded-lg h-11 shadow-sm";
  const labelClasses = "text-sm font-semibold text-slate-900";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2 text-left">
        <Label htmlFor="email" className={labelClasses}>Email / Phone Number</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email or phone number"
          className={inputClasses}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </div>
      <div className="space-y-2 text-left">
        <div className="flex items-center justify-between gap-3">
          <Label htmlFor="password" className={labelClasses}>Password</Label>
          <Link
            href="/forgot-password"
            className="text-xs font-semibold text-teal-700 hover:text-teal-600"
          >
            Forgot Password?
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          className={inputClasses}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
      </div>

      <Button type="submit" size="lg" disabled={isLoading} className="w-full h-11 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-sm">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign In"
        )}
      </Button>

      <p className="text-center text-sm text-slate-600 mt-6">
        Don't have an account?{" "}
        <Link href="/signup" className="font-semibold text-teal-600 hover:underline">
          Sign Up
        </Link>
      </p>

      {error && (
        <Alert tone="error" className="mt-4">
          <AlertTitle>Sign in failed</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert tone="success" className="mt-4">
          <AlertTitle>Ready for integration</AlertTitle>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
