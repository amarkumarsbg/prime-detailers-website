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
import { cn } from "@/lib/utils";

export function SignupForm() {
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const passwordMismatch = useMemo(
    () => confirmPassword.length > 0 && password !== confirmPassword,
    [password, confirmPassword]
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (passwordMismatch) {
      setError("Password and confirm password must match.");
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
      });

      setSuccess(
        "Trial signup received. Backend onboarding will be connected next."
      );
    } catch (err) {
      setError(mapApiError(err));
    } finally {
      setIsLoading(false);
    }
  }

  const inputClasses = "bg-white border-slate-300 text-slate-900 focus-visible:ring-teal-600 focus-visible:border-teal-600 rounded-lg h-11 shadow-sm";
  const labelClasses = "text-sm font-semibold text-slate-900 mb-2 block";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      <div className="grid gap-5 sm:grid-cols-2 text-left">
        <div className="space-y-2">
          <Label htmlFor="ownerName" className={labelClasses}>Full Name</Label>
          <Input
            id="ownerName"
            className={inputClasses}
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
            autoComplete="name"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className={labelClasses}>Email Address</Label>
          <Input
            id="email"
            type="email"
            className={inputClasses}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="phone" className={labelClasses}>Phone Number</Label>
          <div className="flex gap-2">
            <div className="flex items-center justify-center px-3 border border-slate-300 rounded-lg bg-slate-50 text-sm">
              🇮🇳 +91
            </div>
            <Input
              id="phone"
              type="tel"
              className={cn(inputClasses, "flex-1")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              autoComplete="tel"
              placeholder="Enter 10 digit phone number"
            />
          </div>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="businessName" className={labelClasses}>Workshop / Company Name</Label>
          <Input
            id="businessName"
            className={inputClasses}
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
            autoComplete="organization"
            placeholder="My Workshop"
          />
        </div>
        
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="password" className={labelClasses}>Password</Label>
          <Input
            id="password"
            type="password"
            className={inputClasses}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            placeholder="Min 6 characters"
          />
        </div>
        
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="confirmPassword" className={labelClasses}>Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            className={inputClasses}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
            placeholder="Confirm password"
          />
          {passwordMismatch && <p className="text-xs text-red-600 font-medium">Passwords do not match.</p>}
        </div>
      </div>

      <div className="border border-dashed border-slate-300 rounded-xl p-4 flex items-center justify-center bg-slate-50 text-slate-600 text-sm cursor-pointer hover:bg-slate-100 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
        Upload Logo (Optional)
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isLoading || passwordMismatch}
        className="w-full h-11 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-sm mt-6"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Creating trial account...
          </>
        ) : (
          "Sign Up & Start Free Trial"
        )}
      </Button>

      <p className="text-center text-sm text-slate-600 mt-6">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-teal-600 hover:underline">
          Sign In
        </Link>
      </p>

      {error && (
        <div className="mt-6">
          <Alert tone="error">
            <AlertTitle>Signup failed</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      )}

      {success && (
        <div className="mt-6">
          <Alert tone="success">
            <AlertTitle>Signup submitted</AlertTitle>
            <AlertDescription>Account created successfully! Welcome to Prime Detailers.</AlertDescription>
          </Alert>
        </div>
      )}
    </form>
  );
}
