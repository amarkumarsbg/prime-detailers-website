import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
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
      title="Capability-Rich Features"
      description="Every module is designed to support real workshop workflows without disconnected tools and manual follow-up."
    >
      <div className="space-y-5">
        {featureGroups.map((group) => (
          <article key={group.title} className="marketing-surface grid gap-5 p-6 md:grid-cols-[0.8fr_1.2fr] md:items-start sm:p-8">
            <div>
              <h2 className="text-2xl font-semibold">{group.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">Module built for production workflows in workshop teams.</p>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 text-sm">
                  <CheckCircle2 className="size-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
