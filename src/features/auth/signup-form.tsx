"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { signupPublic } from "@/services/signup";
import { mapApiError } from "@/lib/error-messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/features/shared/alert";

const PASSWORD_RULES = [
  "At least 8 characters",
  "At least one letter",
  "At least one number",
];

function passwordMeetsRequirements(password: string) {
  return password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password);
}

export function SignupForm() {
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [branchName, setBranchName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const passwordMismatch = useMemo(
    () => confirmPassword.length > 0 && password !== confirmPassword,
    [password, confirmPassword]
  );

  const weakPassword = useMemo(
    () => password.length > 0 && !passwordMeetsRequirements(password),
    [password]
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (passwordMismatch) {
      setError("Password and confirm password must match.");
      return;
    }

    if (!passwordMeetsRequirements(password)) {
      setError("Password does not meet the requirements.");
      return;
    }

    if (!/^\+?[\d\s-]{8,15}$/.test(phone.trim())) {
      setError("Enter a valid mobile number.");
      return;
    }

    setIsLoading(true);

    try {
      await signupPublic({
        businessName: businessName.trim(),
        ownerName: ownerName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        password,
        branchName: branchName.trim() || undefined,
      });

      setSuccess(
        "Trial signup received. Backend onboarding will be connected next — you can continue exploring the website."
      );
    } catch (err) {
      setError(mapApiError(err));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="businessName">Workshop / Business Name</Label>
          <Input
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
            autoComplete="organization"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="ownerName">Owner Name</Label>
          <Input
            id="ownerName"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Mobile Number</Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            autoComplete="tel"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            aria-describedby="password-requirements"
          />
          {weakPassword && (
            <p className="text-xs text-destructive">Password does not meet requirements.</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          {passwordMismatch && <p className="text-xs text-destructive">Passwords do not match.</p>}
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="branchName">Branch Name (Optional)</Label>
          <Input
            id="branchName"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            placeholder="Main Branch"
          />
        </div>
      </div>

      <div id="password-requirements" className="rounded-xl bg-slate-50 px-4 py-3 text-xs text-muted-foreground">
        <p className="font-medium text-foreground">Password requirements</p>
        <ul className="mt-2 list-disc space-y-1 pl-4">
          {PASSWORD_RULES.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isLoading || passwordMismatch || weakPassword}
        className="btn-marketing w-full sm:w-auto"
      >
        {isLoading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Creating trial account...
          </>
        ) : (
          "Start Free Trial"
        )}
      </Button>

      <p className="text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-primary hover:underline">
          Login
        </Link>
      </p>

      {error && (
        <Alert tone="error">
          <AlertTitle>Signup failed</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert tone="success">
          <AlertTitle>Signup submitted</AlertTitle>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
