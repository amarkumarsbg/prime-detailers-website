import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { PageShell } from "@/features/shared/page-shell";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description: "Explore how Prime Detailers supports workshop owners, branch managers, finance teams, and service advisors.",
  path: "/solutions",
});

const solutionBlocks = [
  {
    title: "For Workshop Owners",
    description: "Get centralized operational and financial visibility across service jobs, billing, and branch activity.",
    bullets: ["Branch-wise insights", "Revenue and expense visibility", "Faster decision-making"],
  },
  {
    title: "For Service Advisors",
    description: "Run check-in, inspection, status updates, and delivery with transparent customer communication.",
    bullets: ["Job card workflows", "Photo-based communication", "Customer reminders"],
  },
  {
    title: "For Inventory Teams",
    description: "Manage parts catalog, purchases, and stock movement with less manual confusion.",
    bullets: ["Stock tracking", "Counter sales", "Low-stock alerts"],
  },
  {
    title: "For Finance Teams",
    description: "Track invoices, payments, receivables, payables, and reporting from one connected platform.",
    bullets: ["Invoice lifecycle", "Cash visibility", "Accounting-oriented reporting"],
  },
];

export default function SolutionsPage() {
  return (
    <PageShell
      title="Solutions for Every Workshop Role"
      description="Prime Detailers supports different responsibilities across operations, customer experience, inventory, finance, and leadership."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {solutionBlocks.map((block) => (
          <article key={block.title} className="marketing-surface p-6">
            <h2 className="text-xl font-semibold">{block.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{block.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              {block.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
