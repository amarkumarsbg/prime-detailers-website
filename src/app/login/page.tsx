import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/features/auth/login-form";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Login",
  description: "Sign in to Prime Detailers to continue to your workshop workspace.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <section className="mx-auto grid w-full max-w-5xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:items-start lg:px-8 lg:py-16">
      <div className="max-w-md">
        <p className="eyebrow">Account</p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Login to Prime Detailers
        </h1>
        <p className="mt-4 text-muted-foreground">
          Access your workshop account. Authentication will redirect to the Workshop App once backend
          login is connected.
        </p>
        <p className="mt-8 text-sm text-muted-foreground">
          New here?{" "}
          <Link href="/signup" className="font-medium text-primary hover:underline">
            Start Free Trial
          </Link>
        </p>
      </div>
      <LoginForm />
    </section>
  );
}
