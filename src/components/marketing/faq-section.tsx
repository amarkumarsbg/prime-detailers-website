import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faqs";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FaqSection() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32" id="faq">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-600 ring-1 ring-inset ring-teal-500/20">
                Frequently Asked Questions
              </p>
              <h2 className="mt-6 text-balance font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Everything you need to know.
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Have a different question and can&apos;t find the answer you&apos;re looking for? Reach out to our support team and we&apos;ll get back to you as soon as we can.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center text-base font-semibold text-teal-600 hover:text-teal-500 transition-colors">
                  Contact support
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: FAQs */}
          <div className="lg:col-span-7">
            <StaggerContainer staggerChildren={0.1}>
              <Accordion className="space-y-4 w-full">
                {faqItems.map((item) => (
                  <StaggerItem key={item.question}>
                    <AccordionItem 
                      value={item.question}
                      className="rounded-2xl border border-slate-200 bg-white px-6 py-2 shadow-sm transition-all duration-200 hover:border-teal-200 hover:shadow-md data-[state=open]:border-teal-200 data-[state=open]:shadow-md data-[state=open]:ring-1 data-[state=open]:ring-teal-500/10"
                    >
                      <AccordionTrigger className="text-left text-base font-bold text-slate-900 hover:no-underline hover:text-teal-600 transition-colors">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4 pt-1">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </StaggerItem>
                ))}
              </Accordion>
            </StaggerContainer>
          </div>
          
        </div>
      </div>
    </section>
  );
}
