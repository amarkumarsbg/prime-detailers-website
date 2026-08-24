import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <div className="marketing-surface relative overflow-hidden p-7 sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklch,var(--primary),white_75%)_0%,transparent_40%),radial-gradient(circle_at_80%_80%,color-mix(in_oklch,var(--primary),white_80%)_0%,transparent_45%)]" />
        <div className="relative">
          <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Your workshop is already busy. Your software should not make it harder.
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Start with Prime Detailers, onboard your team, and run every branch with one connected system.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/signup">
              <Button size="lg">
                Sign Up
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
