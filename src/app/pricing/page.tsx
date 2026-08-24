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
      title="Premium SaaS Pricing, Built for Workshop Growth"
      description="Start with Basic plan and expand with add-ons as your team and branch network grows. Final amount is always backend-calculated."
    >
      <div className="marketing-surface mb-6 grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">Basic plan</p>
          <h2 className="mt-2 text-2xl font-semibold">1 Branch • 3 Users</h2>
          <p className="mt-2 text-sm text-muted-foreground">Choose 1, 2, 3, or 5 year validity and add branches/users based on your requirement.</p>
        </div>
        <div className="rounded-2xl border border-border bg-white p-4">
          <p className="text-sm font-semibold">What this includes</p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Job workflow and inspection</li>
            <li>Customer and vehicle management</li>
            <li>Inventory and finance modules</li>
            <li>Staff and attendance controls</li>
          </ul>
        </div>
      </div>
      <PricingCalculator />
    </PageShell>
  );
}
