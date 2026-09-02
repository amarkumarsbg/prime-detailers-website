import type { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "@/features/auth/signup-form";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Start Free Trial",
  description: "Start your Prime Detailers free trial and set up your workshop account.",
  path: "/signup",
});

export default function SignupPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
      <div className="max-w-md">
        <p className="eyebrow">Start free trial</p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Start your free trial
        </h1>
        <p className="mt-4 text-muted-foreground">
          Create your workshop account in a few minutes. Backend onboarding will connect later —
          this form is production-ready for UI, validation, and future API integration.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
          <li>• Set up your workshop profile</li>
          <li>• Invite your team when ready</li>
          <li>• Explore job cards, billing, and portal workflows</li>
        </ul>
        <p className="mt-8 text-sm text-muted-foreground">
          Prefer to talk first?{" "}
          <Link href="/contact" className="font-medium text-primary hover:underline">
            Contact sales
          </Link>
        </p>
      </div>
      <SignupForm />
    </section>
  );
}
