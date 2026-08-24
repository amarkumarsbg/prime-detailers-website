import type { Metadata } from "next";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Demo",
  description: "Request a guided product demo for Prime Detailers workshop management platform.",
  path: "/demo",
});

export default function DemoPage() {
  return (
    <PageShell
      title="Product Demo"
      description="Demo scheduling workflow can be added once backend lead-routing endpoint is available."
    >
      <div className="rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">
        Demo request automation is not configured yet. Please use the Contact page for demo requests.
      </div>
    </PageShell>
  );
}
