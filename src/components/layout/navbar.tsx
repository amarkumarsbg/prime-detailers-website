"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <div
        className={`mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-6 ${
          hasScrolled
            ? "border-white/65 bg-white/82 shadow-[0_20px_50px_-35px_color-mix(in_oklch,var(--primary),black_70%)] backdrop-blur"
            : "border-white/55 bg-white/45 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 text-base font-semibold sm:text-lg">
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo-700 text-primary-foreground shadow-lg">
            <Zap className="h-4 w-4" />
          </span>
          <span className="text-gradient">Prime Detailers</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="shadow-[0_14px_28px_-18px_color-mix(in_oklch,var(--primary),black_58%)]">
              Sign Up
            </Button>
          </Link>
        </div>

        <button
          className="rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`mx-auto mt-2 w-full max-w-7xl overflow-hidden rounded-2xl border border-white/65 bg-white/90 backdrop-blur transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                <Button variant="outline" className="w-full" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setMenuOpen(false)}>
                <Button className="w-full" size="sm">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
      </div>
    </header>
  );
}
