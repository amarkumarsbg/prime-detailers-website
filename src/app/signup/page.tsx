import type { Metadata } from "next";
import { SignupForm } from "@/features/auth/signup-form";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Signup",
  description: "Create your Prime Detailers organization account and start onboarding your workshop team.",
  path: "/signup",
});

export default function SignupPage() {
  return (
    <PageShell
      title="Create Your Account"
      description="Provide business and owner details to start organization setup and access your workshop platform."
      showCta={false}
    >
      <SignupForm />
    </PageShell>
  );
}
