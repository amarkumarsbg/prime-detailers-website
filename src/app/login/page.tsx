import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/login-form";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Login",
  description: "Sign in to Prime Detailers and continue to your workshop workspace.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <PageShell
      title="Sign In"
      description="Use your organization account credentials. Customer organization users are redirected to the Workshop App."
      showCta={false}
    >
      <LoginForm />
    </PageShell>
  );
}
