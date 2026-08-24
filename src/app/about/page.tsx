import type { Metadata } from "next";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Prime Detailers provides reliable workshop software for growing detailing and auto service businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell
      title="About Prime Detailers"
      description="Prime Detailers is focused on practical workshop operations: fewer manual gaps, better customer communication, and stronger financial control."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-lg font-semibold">Our Focus</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Help workshop owners and managers run daily operations with clarity, consistency, and scale.
          </p>
        </article>
        <article className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-lg font-semibold">Product Boundary</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This website handles marketing and signup, while workshop operations continue in the dedicated Workshop App.
          </p>
        </article>
      </div>
    </PageShell>
  );
}
