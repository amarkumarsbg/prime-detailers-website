import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  CircleAlert,
  FileStack,
  HandCoins,
  IdCard,
  Layers3,
  MessageCircleMore,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BeforeAfterSlider, ProductHeroMockup, ProductShowcaseTabs } from "@/features/marketing/mockups";
import { FinalCtaSection } from "@/features/marketing/sections";

const problemItems = [
  "Scattered customer and vehicle data",
  "Manual invoicing and delayed collections",
  "Stock confusion across parts and purchases",
  "Missed customer follow-ups",
  "Attendance and payroll friction",
  "No clear daily financial visibility",
];

const solutionPoints = [
  "Job cards, inspections, and delivery in one workflow",
  "Unified customer profile with vehicle history",
  "Inventory, billing, and finance connected in real-time",
  "Attendance, leave, salary, and incentives in one module",
];

const coreSections = [
  {
    title: "Workshop Management",
    headline: "From vehicle check-in to delivery.",
    points: ["Job Card", "Inspection", "Before/After Photos", "Mechanic Assignment", "Delivery"],
    icon: FileStack,
  },
  {
    title: "Customer Experience",
    headline: "Turn every service visit into trust.",
    points: ["Customer Profile", "Vehicle History", "WhatsApp", "Before/After Photos", "Service Reminders"],
    icon: MessageCircleMore,
  },
  {
    title: "Inventory",
    headline: "Parts and stock without confusion.",
    points: ["Parts Catalog", "Purchases", "Stock", "Counter Sales", "Alerts"],
    icon: Layers3,
  },
  {
    title: "Finance",
    headline: "Real-time visibility for business control.",
    points: ["Invoices", "Payments", "Accounting", "Revenue", "Expenses", "P&L"],
    icon: WalletCards,
  },
  {
    title: "People & Payroll",
    headline: "Run staff operations with confidence.",
    points: ["Staff", "Attendance", "Leave", "Salary", "Incentives"],
    icon: Users,
  },
];

const experienceFlow = [
  "Check-in",
  "Inspection",
  "Work in Progress",
  "Photos",
  "Invoice",
  "Payment",
  "Delivery",
  "Service Reminder",
];

export default function Home() {
  return (
    <>
      <section className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="marketing-grid absolute inset-x-4 inset-y-14 -z-10 rounded-[2.2rem] opacity-40 sm:inset-x-6 lg:inset-x-8" />
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="reveal-up">
            <Badge variant="secondary" className="mb-4">Premium SaaS platform for workshop teams</Badge>
            <h1 className="text-gradient max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Run Your Workshop Like a Modern Business.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Manage jobs, customers, inventory, billing, staff, accounting and customer
              experience from one powerful platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/signup">
                <Button size="lg" className="min-w-36">
                  Sign Up
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg" className="min-w-36">
                  Book a Demo
                </Button>
              </Link>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              No complex setup. Built for modern workshops.
            </p>
          </div>

          <ProductHeroMockup />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="marketing-surface reveal-up animation-delay-1 p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Built for workshop teams that want to grow
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-border/70 bg-white p-4">
              <p className="text-sm font-semibold">Faster job handling</p>
              <p className="mt-1 text-sm text-muted-foreground">Structured workflows reduce manual back-and-forth in operations.</p>
            </article>
            <article className="rounded-2xl border border-border/70 bg-white p-4">
              <p className="text-sm font-semibold">Centralized workshop data</p>
              <p className="mt-1 text-sm text-muted-foreground">Jobs, customers, vehicles, stock, staff, and billing stay connected.</p>
            </article>
            <article className="rounded-2xl border border-border/70 bg-white p-4">
              <p className="text-sm font-semibold">Clear financial visibility</p>
              <p className="mt-1 text-sm text-muted-foreground">Track invoices, payments, receivables, payables, and reports in one view.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="marketing-surface reveal-up p-6 sm:p-8">
            <p className="text-sm font-semibold text-muted-foreground">Common workshop pain points</p>
            <ul className="mt-4 space-y-2">
              {problemItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CircleAlert className="size-4 text-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="marketing-surface reveal-up animation-delay-1 p-6 sm:p-8">
            <p className="text-sm font-semibold text-primary">Prime Detailers brings everything together.</p>
            <ul className="mt-4 space-y-2">
              {solutionPoints.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="size-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/features" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Explore product capabilities
              <ArrowRight className="size-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">Core product</p>
          <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Large, practical feature modules built for daily workshop operations.
          </h2>
        </div>

        <div className="mt-8 space-y-5">
          {coreSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <article key={section.title} className="marketing-surface grid gap-6 p-6 md:grid-cols-[0.95fr_1.05fr] md:items-center sm:p-8">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <Badge variant="secondary">{section.title}</Badge>
                  <h3 className="mt-3 text-2xl font-semibold">{section.headline}</h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {section.points.map((item) => (
                      <li key={item} className="rounded-xl border border-border/70 bg-white px-3 py-2 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""} rounded-2xl border border-border bg-white p-4`}>
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <Icon className="size-4 text-primary" />
                      {section.title}
                    </p>
                    <span className="text-xs text-muted-foreground">Prime Detailers</span>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {section.points.map((item) => (
                      <div key={item} className="rounded-xl border border-border bg-muted/50 p-3">
                        <p className="text-xs text-muted-foreground">Module</p>
                        <p className="mt-1 text-sm font-semibold">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">Product showcase</p>
          <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything your workshop needs. In one place.
          </h2>
        </div>
        <div className="mt-8">
          <ProductShowcaseTabs />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Badge variant="secondary">Before / After Photos</Badge>
            <h2 className="mt-3 max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Show the work. Build trust.
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Camera className="size-4 text-primary" />Capture before photos at check-in</li>
              <li className="flex items-center gap-2"><Camera className="size-4 text-primary" />Capture after photos at completion</li>
              <li className="flex items-center gap-2"><HandCoins className="size-4 text-primary" />Share updates to improve transparency</li>
            </ul>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="marketing-surface p-6 sm:p-8">
          <Badge variant="secondary">Customer Experience Flow</Badge>
          <h2 className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Turn every service into a better customer experience.
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {experienceFlow.map((step, index) => (
              <div key={step} className="rounded-xl border border-border bg-white p-3 text-sm">
                <p className="text-xs text-muted-foreground">0{index + 1}</p>
                <p className="mt-1 font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Badge variant="secondary">Multi-branch SaaS</Badge>
            <h2 className="mt-3 max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to grow beyond one workshop?
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Building2 className="size-4 text-primary" />Multiple branches with centralized management</li>
              <li className="flex items-center gap-2"><Users className="size-4 text-primary" />User limits and role-based access</li>
              <li className="flex items-center gap-2"><IdCard className="size-4 text-primary" />Branch-wise data and reporting visibility</li>
            </ul>
          </div>
          <div className="marketing-surface p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-white p-4">
                <p className="text-xs text-muted-foreground">Central Workspace</p>
                <p className="mt-1 font-semibold">Organization Hub</p>
              </div>
              <div className="rounded-xl border border-border bg-white p-4">
                <p className="text-xs text-muted-foreground">Branch A</p>
                <p className="mt-1 font-semibold">Operations + Finance</p>
              </div>
              <div className="rounded-xl border border-border bg-white p-4">
                <p className="text-xs text-muted-foreground">Branch B</p>
                <p className="mt-1 font-semibold">Operations + Finance</p>
              </div>
              <div className="rounded-xl border border-border bg-white p-4">
                <p className="text-xs text-muted-foreground">Consolidated Reports</p>
                <p className="mt-1 font-semibold">Revenue, Expenses, P&L</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="marketing-surface p-6 sm:p-8">
            <Badge variant="secondary">How it works</Badge>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Go live in four clear steps.</h2>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Create your workshop", "Set up your team", "Start managing jobs", "Grow your business"].map(
                (step, index) => (
                  <li key={step} className="rounded-xl border border-border bg-white p-4">
                    <p className="text-xs text-muted-foreground">0{index + 1}</p>
                    <p className="mt-1 font-semibold">{step}</p>
                  </li>
                )
              )}
            </ol>
          </div>
          <div className="marketing-surface p-6 sm:p-8">
            <Badge variant="secondary">Security and trust</Badge>
            <h2 className="mt-3 text-2xl font-semibold">Built on real platform controls.</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" />Secure organization-level data isolation</li>
              <li className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" />Role-based access for operational control</li>
              <li className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" />Centralized backend for billing and reporting</li>
              <li className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" />Shared platform with controlled SaaS entitlement</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="marketing-surface p-6 sm:p-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to see pricing?</h2>
          <p className="mt-2 text-muted-foreground">
            Start with Basic plan, choose validity, and add branches/users based on your growth.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/pricing">
              <Button>
                Start with Prime Detailers
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline">Read FAQ</Button>
            </Link>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}
