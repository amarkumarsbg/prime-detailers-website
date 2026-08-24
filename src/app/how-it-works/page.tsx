import type { Metadata } from "next";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "How It Works",
  description: "See the onboarding journey from pricing and signup to workshop operations and branch growth.",
  path: "/how-it-works",
});

const steps = [
  {
    id: "01",
    title: "Create your workshop",
    description: "Start from pricing, sign up your business, and initialize organization setup.",
  },
  {
    id: "02",
    title: "Set up your team",
    description: "Add staff users and map access based on roles and branch responsibilities.",
  },
  {
    id: "03",
    title: "Start managing jobs",
    description: "Move daily operations to job cards, inspections, billing, and customer communication.",
  },
  {
    id: "04",
    title: "Grow your business",
    description: "Scale branches, users, and reporting visibility with your subscription model.",
  },
];

export default function HowItWorksPage() {
  return (
    <PageShell
      title="A Clear Four-Step Onboarding Flow"
      description="Prime Detailers is structured to move your workshop from setup to stable operations quickly."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step) => (
          <article key={step.id} className="marketing-surface p-6">
            <p className="text-4xl font-semibold text-primary/70">{step.id}</p>
            <h2 className="mt-3 text-xl font-semibold">{step.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
