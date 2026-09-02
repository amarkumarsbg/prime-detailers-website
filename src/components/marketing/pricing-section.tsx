import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingNote, pricingPlans } from "@/data/pricing";
import { cn } from "@/lib/utils";

export function PricingSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "mt-2" : "pt-10 pb-16 sm:pt-12 sm:pb-20"} id="pricing">
      {!compact && (
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Plans that scale with your workshop.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start with a free trial, then choose based on branches and team size.
          </p>
        </div>
      )}

      <div className={cn("grid gap-5 lg:grid-cols-4", compact ? "" : "mt-10")}>
        {pricingPlans.map((plan) => (
          <article
            key={plan.id}
            className={cn(
              "flex flex-col rounded-2xl border bg-white p-6",
              plan.highlighted ? "border-primary shadow-sm" : "border-border"
            )}
          >
            {plan.highlighted && (
              <p className="mb-3 text-xs font-semibold tracking-wide text-primary uppercase">
                Most popular
              </p>
            )}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-2 min-h-12 text-sm text-muted-foreground">{plan.description}</p>
            <div className="mt-5">
              <p className="font-heading text-3xl font-semibold tracking-tight">{plan.priceLabel}</p>
              <p className="mt-1 text-xs text-muted-foreground">{plan.billingDuration}</p>
            </div>
            <div className="mt-4 space-y-1 border-y border-border py-4 text-sm">
              <p className="font-medium">{plan.branches}</p>
              <p className="font-medium">{plan.users}</p>
            </div>
            <ul className="mt-4 flex-1 space-y-2.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href={plan.ctaHref} className="mt-6">
              <Button
                variant={plan.highlighted ? "default" : "outline"}
                className="btn-marketing w-full"
              >
                {plan.ctaLabel}
              </Button>
            </Link>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">{pricingNote}</p>
    </section>
  );
}
