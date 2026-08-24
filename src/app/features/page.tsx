import { Check } from "lucide-react";
import type { Metadata } from "next";
import { featureGroups } from "@/features/marketing/data";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Features",
  description: "Explore workshop, customer, inventory, finance, HR, and subscription capabilities in Prime Detailers.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <PageShell
      title="Product Features"
      description="Built with real workshop operations in mind, from job cards and inspections to receivables and payroll."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {featureGroups.map((group) => (
          <article key={group.title} className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">{group.title}</h2>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
