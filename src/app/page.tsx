import Link from "next/link";
import { ArrowRight, CircleCheckBig, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Badge variant="secondary" className="mb-4">
            Built for detailing and workshop businesses
          </Badge>
          <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Run Your Workshop Smarter
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {siteConfig.name} is a complete workshop management platform to run jobs,
            customers, billing, inventory, and team operations from one connected system.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/pricing">
              <Button size="lg" className="min-w-36">
                Get Started
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="min-w-36">
                View Pricing
              </Button>
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <CircleCheckBig className="size-4 text-primary" />
              Single platform for operations, CRM, and finance
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <CircleCheckBig className="size-4 text-primary" />
              Scales with multi-branch and team growth
            </p>
          </div>
        </div>

        <Card className="border border-border/80 bg-card/80 shadow-[0_24px_65px_-45px_color-mix(in_oklch,var(--primary),black_72%)] backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl">Why workshop owners choose Prime Detailers</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="rounded-lg border border-border/70 bg-background/80 p-4">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="size-4 text-primary" />
                Streamlined job flow
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Create job cards, track inspection notes, and share before/after photos.
              </p>
            </div>
            <div className="rounded-lg border border-border/70 bg-background/80 p-4">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <ShieldCheck className="size-4 text-primary" />
                Reliable business control
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Keep visibility on cash flow, receivables, payables, and staff performance.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
