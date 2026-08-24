import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/features/marketing/data";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description: "Answers about usage, branches, users, pricing model, onboarding, and subscription lifecycle.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <PageShell
      title="Frequently Asked Questions"
      description="Product and onboarding answers based on current platform behavior."
    >
      <div className="marketing-surface p-6 sm:p-8">
        <Accordion>
          {faqItems.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-base font-semibold">{item.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PageShell>
  );
}
