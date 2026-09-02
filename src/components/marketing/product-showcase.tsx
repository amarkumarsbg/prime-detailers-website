import { ProductMockup } from "@/components/marketing/product-mockup";
import { showcaseSections } from "@/data/features";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { CheckCircle2 } from "lucide-react";

export function ProductShowcase() {
  return (
    <section className="bg-white py-24 sm:py-32 space-y-24 lg:space-y-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center mb-20 lg:mb-24">
          <p className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-600 ring-1 ring-inset ring-teal-500/20">
            Product showcase
          </p>
          <h2 className="mt-6 text-balance font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built around how workshops actually operate.
          </h2>
        </FadeIn>

        <div className="space-y-24 lg:space-y-32">
          {showcaseSections.map((section, index) => (
            <StaggerContainer
              key={section.id}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <StaggerItem>
                <p className="text-sm font-semibold tracking-wide text-teal-600 uppercase">{section.eyebrow}</p>
                <h3 className="mt-4 text-balance font-heading text-2xl font-bold text-slate-900 sm:text-3xl">{section.title}</h3>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">{section.description}</p>
                <ul className="mt-8 space-y-4">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-base text-slate-700">
                      <CheckCircle2 className="size-5 text-teal-500 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
              <StaggerItem className="relative">
                <div className="absolute -inset-4 bg-slate-50/50 rounded-3xl -z-10" />
                <ProductMockup kind={section.mockup} />
              </StaggerItem>
            </StaggerContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
