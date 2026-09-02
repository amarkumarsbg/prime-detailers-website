import { HeroSection } from "@/components/marketing/hero-section";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { WorkshopTypes } from "@/components/marketing/workshop-types";
import { ProblemSection } from "@/components/marketing/problem-section";
import { SolutionSection } from "@/components/marketing/solution-section";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { PortalSection } from "@/components/marketing/portal-section";
import { WhySection } from "@/components/marketing/why-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works";
import { PricingSection } from "@/components/marketing/pricing-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { CtaSection } from "@/components/marketing/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <WorkshopTypes />
      <ProblemSection />
      <SolutionSection />
      <ProductShowcase />
      <PortalSection />
      <WhySection />
      <HowItWorksSection />
      <PricingSection />
      <CtaSection
        title="Ready to modernize your workshop?"
        description="Start a free trial and see how Prime Detailers centralizes workshop operations."
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection
        title="Your workshop deserves better tools."
        description="Start your free trial today, or talk to sales about multi-branch growth."
        secondaryLabel="Talk to Sales"
        secondaryHref="/contact"
      />
    </>
  );
}
