"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const showcaseTabs = [
  {
    key: "workshop",
    label: "Workshop",
    title: "Job flow and inspections",
    points: ["Job Cards", "Mechanic Assignment", "Inspection Checklist", "Before/After Photos"],
  },
  {
    key: "customers",
    label: "Customers",
    title: "Experience and retention",
    points: ["Customer Profiles", "Vehicle History", "WhatsApp Updates", "Service Reminders"],
  },
  {
    key: "inventory",
    label: "Inventory",
    title: "Stock and parts control",
    points: ["Parts Catalog", "Purchases", "Counter Sales", "Stock Alerts"],
  },
  {
    key: "finance",
    label: "Finance",
    title: "Billing and cash visibility",
    points: ["Invoices", "Payments", "Receivables", "Payables"],
  },
  {
    key: "staff",
    label: "Staff",
    title: "People and payroll",
    points: ["Attendance", "Leave", "Salary", "Incentives"],
  },
  {
    key: "reports",
    label: "Reports",
    title: "Decision-ready view",
    points: ["Branch Summary", "Revenue Trends", "Expense Tracking", "Performance View"],
  },
] as const;

export function ProductHeroMockup() {
  return (
    <div className="marketing-surface reveal-up animation-delay-2 relative overflow-hidden p-4 sm:p-5">
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-r from-indigo-500/15 via-white/20 to-cyan-400/15" />
      <div className="relative rounded-2xl border border-border/80 bg-white shadow-[0_25px_65px_-45px_color-mix(in_oklch,var(--primary),black_65%)]">
        <div className="flex items-center justify-between border-b border-border/70 px-4 py-2">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-rose-400" />
            <span className="size-2 rounded-full bg-amber-300" />
            <span className="size-2 rounded-full bg-emerald-400" />
          </div>
          <p className="text-xs text-muted-foreground">Prime Detailers • Workshop Overview</p>
        </div>
        <div className="grid gap-3 p-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-3">
            <div className="rounded-xl border border-border bg-muted/45 p-3">
              <p className="text-xs text-muted-foreground">Today&apos;s Job Cards</p>
              <p className="mt-1 text-sm font-semibold">Vehicle Check-in to Delivery</p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-lg bg-white p-2">
                  <p className="text-muted-foreground">Check-in</p>
                  <p className="font-semibold">6</p>
                </div>
                <div className="rounded-lg bg-white p-2">
                  <p className="text-muted-foreground">In Progress</p>
                  <p className="font-semibold">9</p>
                </div>
                <div className="rounded-lg bg-white p-2">
                  <p className="text-muted-foreground">Delivery</p>
                  <p className="font-semibold">4</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-white p-3">
              <p className="text-xs text-muted-foreground">Customer Timeline</p>
              <div className="mt-2 space-y-2 text-xs">
                <p className="rounded-md bg-muted/60 px-2 py-1">Inspection completed</p>
                <p className="rounded-md bg-muted/60 px-2 py-1">Before/After photos shared</p>
                <p className="rounded-md bg-muted/60 px-2 py-1">Invoice generated and payment collected</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl border border-border bg-white p-3">
              <p className="text-xs text-muted-foreground">Stock Snapshot</p>
              <p className="mt-1 text-sm font-semibold">3 low-stock alerts</p>
              <div className="mt-2 h-2 rounded-full bg-muted">
                <div className="h-full w-2/3 rounded-full bg-primary" />
              </div>
            </div>
            <div className="rounded-xl border border-border bg-white p-3">
              <p className="text-xs text-muted-foreground">Finance</p>
              <p className="mt-1 text-sm font-semibold">Receivables and daily cash flow</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-md bg-muted/60 p-2">Invoices</div>
                <div className="rounded-md bg-muted/60 p-2">Payments</div>
                <div className="rounded-md bg-muted/60 p-2">Expenses</div>
                <div className="rounded-md bg-muted/60 p-2">P&L</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductShowcaseTabs() {
  const [activeTab, setActiveTab] = useState<(typeof showcaseTabs)[number]["key"]>("workshop");
  const activeData = showcaseTabs.find((tab) => tab.key === activeTab) ?? showcaseTabs[0];

  return (
    <div className="marketing-surface overflow-hidden p-4 sm:p-6">
      <div className="flex flex-wrap gap-2">
        {showcaseTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
              activeTab === tab.key
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-border bg-white text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Badge variant="secondary">{activeData.label}</Badge>
          <h3 className="mt-3 text-2xl font-semibold">{activeData.title}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {activeData.points.map((item) => (
              <li key={item} className="rounded-lg border border-border bg-white px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-white p-4 shadow-[0_20px_50px_-35px_color-mix(in_oklch,var(--primary),black_70%)]">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <p className="text-sm font-semibold">{activeData.label} Module</p>
            <span className="text-xs text-muted-foreground">Live view mockup</span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {activeData.points.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-muted/50 p-3">
                <p className="text-xs text-muted-foreground">Prime Detailers</p>
                <p className="mt-1 text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterSlider() {
  const [slider, setSlider] = useState(55);

  return (
    <div className="marketing-surface overflow-hidden p-5 sm:p-6">
      <div className="rounded-2xl border border-border bg-white p-4">
        <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>Before</span>
          <span>After</span>
        </div>
        <div className="relative h-52 overflow-hidden rounded-xl border border-border bg-muted/45 sm:h-64">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-300/70 to-zinc-200/60" />
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-600/40 to-cyan-500/35" style={{ width: `${slider}%` }} />
          <div className="absolute inset-y-0" style={{ left: `calc(${slider}% - 1px)` }}>
            <div className="h-full w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]" />
          </div>
          <div className="absolute left-4 top-4 rounded-md bg-white/90 px-2 py-1 text-xs font-medium">Before Photo</div>
          <div className="absolute right-4 top-4 rounded-md bg-white/90 px-2 py-1 text-xs font-medium">After Photo</div>
        </div>
        <input
          type="range"
          min={15}
          max={85}
          value={slider}
          onChange={(e) => setSlider(Number(e.target.value))}
          className="mt-4 w-full"
          aria-label="Before and after slider"
        />
      </div>
    </div>
  );
}
