"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const pillClass = "pointer-events-auto flex items-center rounded-full border border-white/20 bg-white/70 shadow-lg backdrop-blur-xl transition-all duration-300";

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed inset-x-0 z-50 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300",
        hasScrolled ? "top-4" : "top-6"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        
        {/* Left Segment: Logo */}
        <div className={cn(pillClass, "h-14 px-3")}>
          <Link
            href="/"
            className="flex items-center gap-3 font-heading text-base font-semibold tracking-tight text-slate-900 group"
          >
            <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-700 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5">
                <path d="M16 6L18.5 13.5L26 16L18.5 18.5L16 26L13.5 18.5L6 16L13.5 13.5L16 6Z" fill="white" />
                <path d="M16 3L27 8V16C27 22 22.5 27 16 29C9.5 27 5 22 5 16V8L16 3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0.2" />
              </svg>
            </div>
            <span className="pr-3">{siteConfig.name}</span>
          </Link>
        </div>

        {/* Center Segment: Navigation (Desktop) */}
        <nav className={cn(pillClass, "hidden lg:flex h-14 px-8 gap-8")} aria-label="Primary">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
               <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 relative py-2",
                  active ? "text-teal-700" : "text-slate-600 hover:text-slate-950"
                )}
              >
                {item.label}
                {active && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full" 
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Segment: Actions */}
        <div className={cn(pillClass, "h-14 px-2 gap-2")}>
          <Link href="/login" className="hidden lg:block">
            <Button variant="ghost" size="sm" className="h-10 rounded-full px-5 font-medium text-slate-700 hover:bg-slate-100/50 hover:text-slate-950">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="h-10 rounded-full bg-teal-600 px-6 font-semibold text-white transition-colors hover:bg-teal-500 shadow-sm">
              Start Free Trial
            </Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100/50 hover:text-slate-950 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls={menuId}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        id={menuId}
        className={cn(
          "pointer-events-auto absolute inset-x-4 top-[calc(100%+1rem)] sm:inset-x-6 overflow-hidden rounded-3xl border border-white/20 bg-white/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 lg:hidden",
          menuOpen ? "max-h-[480px] opacity-100" : "max-h-0 border-transparent opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-50",
                  active ? "text-teal-700 bg-teal-50/50" : "text-slate-600 hover:text-slate-900"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <Button variant="outline" className="h-11 w-full rounded-xl border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50 hover:text-slate-900" size="sm">
                Login
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}

