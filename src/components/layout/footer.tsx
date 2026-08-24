import Link from "next/link";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="mx-auto mt-8 w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 lg:pb-10">
      <div className="marketing-surface p-7 sm:p-8 lg:p-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo-700 text-primary-foreground">
                <Zap className="h-4 w-4" />
              </span>
              <span className="text-gradient">Prime Detailers</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Complete workshop management platform for auto detailing businesses.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link></li>
              <li><Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link href="/demo" className="hover:text-foreground transition-colors">Book a Demo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/login" className="hover:text-foreground transition-colors">Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/signup" className="hover:text-foreground transition-colors">Get Started</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Prime Detailers. All rights reserved.</p>
          <p>Built for workshop teams that want to grow.</p>
        </div>
      </div>
    </footer>
  );
}
