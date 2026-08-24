import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PageShell({
  title,
  description,
  children,
  showCta = true,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  showCta?: boolean;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="mb-8 max-w-3xl">
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 text-pretty text-muted-foreground">{description}</p>
      </header>
      {children}
      {showCta && (
        <div className="mt-12 rounded-xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Ready to get started?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Explore plans, create your organization, and move your team into Prime Detailers.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/pricing">
              <Button>View Pricing</Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline">Create Account</Button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
