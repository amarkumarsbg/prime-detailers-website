"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/marketing/scroll-to-top";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = 
    pathname === "/login" || 
    pathname === "/signup" || 
    pathname === "/forgot-password";

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      {!isAuthPage && <Navbar />}
      <main className={!isAuthPage ? "flex-1 pt-14 sm:pt-16" : "flex-1"}>
        {children}
      </main>
      {!isAuthPage && <Footer />}
      <ScrollToTop />
    </div>
  );
}
