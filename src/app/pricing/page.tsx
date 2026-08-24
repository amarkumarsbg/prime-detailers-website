import type { Metadata } from "next";
import { PricingCalculator } from "@/features/pricing/pricing-calculator";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description: "Prime Detailers SaaS pricing with backend-calculated quote support for plan term, extra branches, and extra users.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <PageShell
      title="Simple, Scalable Pricing"
      description="Start with BASIC plan: 1 Branch, 3 Users. Add branch and user capacity as your workshop grows."
    >
      <div className="mb-6 rounded-xl border border-border bg-card p-5">
        <h2 className="text-lg font-semibold">BASIC Plan</h2>
        <p className="mt-1 text-sm text-muted-foreground">Includes 1 Branch and 3 Users. Validity options: 1, 2, 3, or 5 years.</p>
      </div>
      <PricingCalculator />
    </PageShell>
  );
}
