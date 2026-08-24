import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/features/marketing/data";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description: "Find answers about plans, branches, expiry behavior, renewals, and workflow in Prime Detailers.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <PageShell title="Frequently Asked Questions" description="Answers based on current product and backend behavior.">
      <Accordion>
        {faqItems.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </PageShell>
  );
}
