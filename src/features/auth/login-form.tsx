"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { loginPublic } from "@/services/auth";
import { mapApiError } from "@/lib/error-messages";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
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
      <div className="text-left">
        <FloatingInput
          id="email"
          type="email"
          label="Email / Phone Number"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </div>
      <div className="text-left">
        <div className="flex justify-end mb-1">
          <Link
            href="/forgot-password"
            className="text-xs font-semibold text-teal-700 hover:text-teal-600"
          >
            Forgot Password?
          </Link>
        </div>
        <FloatingInput
          id="password"
          type="password"
          label="Password"
          placeholder="••••••••"
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
        <div className="mt-6">
          <Alert tone="error">
            <AlertTitle>Sign in failed</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      )}

      {success && (
        <div className="mt-6">
          <Alert tone="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Login successful! Redirecting...</AlertDescription>
          </Alert>
        </div>
      )}
    </form>
  );
}
