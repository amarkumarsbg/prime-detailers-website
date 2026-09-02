import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faqs";

export function FaqSection() {
  return (
    <section className="section-pad" id="faq">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Questions workshops ask before getting started.
          </h2>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-white px-4 sm:px-6">
          <Accordion>
            {faqItems.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
