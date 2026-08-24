import type { Metadata } from "next";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "How It Works",
  description: "See the onboarding journey from pricing to signup, organization setup, and workshop app access.",
  path: "/how-it-works",
});

const steps = [
  "Choose your plan and validity on Pricing.",
  "Create your account on Signup with business and owner details.",
  "Organization, owner account, and default branch are created by backend workflow.",
  "Subscription/trial entitlement is applied based on backend capabilities.",
  "Team starts using the Workshop App at app.primedetailers.com.",
];

export default function HowItWorksPage() {
  return (
    <PageShell
      title="How Prime Detailers Works"
      description="A clean onboarding flow designed to take workshop teams from interest to operations quickly."
    >
      <ol className="space-y-3">
        {steps.map((step, index) => (
          <li key={step} className="rounded-xl border border-border bg-card p-4 text-sm">
            <p className="font-semibold">Step {index + 1}</p>
            <p className="mt-1 text-muted-foreground">{step}</p>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
