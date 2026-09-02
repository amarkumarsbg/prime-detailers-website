"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, Phone, Mail, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#fafafa] pt-16 pb-8 border-t border-slate-200">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.5fr] mb-16">
          {/* Column 1: Brand & CTA */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex size-10 items-center justify-center rounded-xl bg-teal-600 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                  {/* Sparkle/Diamond for 'Detailers' */}
                  <path d="M16 6L18.5 13.5L26 16L18.5 18.5L16 26L13.5 18.5L6 16L13.5 13.5L16 6Z" fill="white" />
                  {/* Outer Shield/Badge for 'Prime' Protection */}
                  <path d="M16 3L27 8V16C27 22 22.5 27 16 29C9.5 27 5 22 5 16V8L16 3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0.2" />
                </svg>
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-slate-900">
                {siteConfig.name}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600">
              Prime Detailers is a complete Garage Management Software for car workshops. Manage Job Cards, GST Billing, Inventory, Customer History, Service Reminders & Reports from one platform.
            </p>
            <p className="text-sm font-bold text-slate-900">
              Product By <span className="text-teal-600">PrimeDetailers</span>
            </p>
            <Button className="rounded-full bg-[#d94826] hover:bg-[#c23e1e] text-white px-6">
              Access Platform <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold text-slate-900 uppercase">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><Link href="/" className="hover:text-teal-600 transition-colors">Home</Link></li>
              <li><Link href="/features" className="hover:text-teal-600 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-teal-600 transition-colors">Pricing</Link></li>
              <li><Link href="/demo" className="hover:text-teal-600 transition-colors">Book Demo</Link></li>
              <li><Link href="/contact" className="hover:text-teal-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Features */}
          <div>
            <h3 className="mb-6 text-sm font-bold text-slate-900 uppercase">Features</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><Link href="/features#job-cards" className="hover:text-teal-600 transition-colors">Job Cards</Link></li>
              <li><Link href="/features#billing" className="hover:text-teal-600 transition-colors">GST Billing</Link></li>
              <li><Link href="/features#inventory" className="hover:text-teal-600 transition-colors">Inventory</Link></li>
              <li><Link href="/features#reports" className="hover:text-teal-600 transition-colors">Reports</Link></li>
              <li><Link href="/features#history" className="hover:text-teal-600 transition-colors">Customer History</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-6 text-sm font-bold text-slate-900 uppercase">Contact</h3>
            <div className="space-y-4 text-sm font-medium text-slate-600">
              <div className="flex items-start gap-3">
                <Phone className="size-5 text-[#d94826] shrink-0 mt-0.5" />
                <span>+91 7574045260 | +91 8866484903</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-[#d94826] shrink-0" />
                <a href="mailto:contact@primedetailers.com" className="hover:text-teal-600 transition-colors">
                  contact@primedetailers.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between relative">
          <p className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved by <span className="text-[#d94826] font-bold">PrimeDetailers</span>
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="flex size-8 items-center justify-center rounded-full bg-[#fcedea] text-[#d94826] transition-transform hover:scale-110">
              <FacebookIcon className="size-4" />
            </a>
            <a href="#" className="flex size-8 items-center justify-center rounded-full bg-[#fcedea] text-[#d94826] transition-transform hover:scale-110">
              <InstagramIcon className="size-4" />
            </a>
            <a href="#" className="flex size-8 items-center justify-center rounded-full bg-[#fcedea] text-[#d94826] transition-transform hover:scale-110">
              <YoutubeIcon className="size-4" />
            </a>
            <a href="#" className="flex size-8 items-center justify-center rounded-full bg-[#fcedea] text-[#d94826] transition-transform hover:scale-110">
              <LinkedinIcon className="size-4" />
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900">Terms of Service</Link>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className={`absolute right-0 -top-6 flex size-12 items-center justify-center rounded-full bg-[#d94826] text-white shadow-lg transition-all hover:bg-[#c23e1e] ${
              showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
            aria-label="Scroll to top"
          >
            <ChevronUp className="size-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
