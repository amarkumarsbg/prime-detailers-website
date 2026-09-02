import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection({
  title = "Ready to modernize your workshop?",
  description = "Start your free trial, explore pricing, or talk to sales about a rollout for your team.",
  primaryLabel = "Start Free Trial",
  primaryHref = "/signup",
  secondaryLabel = "View Pricing",
  secondaryHref = "/pricing",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <div className="overflow-hidden rounded-2xl border border-border bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-14">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-primary-foreground/80 sm:text-base">{description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={primaryHref}>
              <Button
                size="lg"
                className="btn-marketing bg-white text-foreground hover:bg-white/90"
              >
                {primaryLabel}
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href={secondaryHref}>
              <Button
                size="lg"
                variant="outline"
                className="btn-marketing border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                {secondaryLabel}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
