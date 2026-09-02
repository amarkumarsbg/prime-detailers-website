import type { Metadata } from "next";
import Link from "next/link";
import { ForgotPasswordForm } from "@/features/auth/forgot-password-form";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { Car } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Forgot Password",
  description: "Reset your Prime Detailers account password.",
  path: "/forgot-password",
});

export default function ForgotPasswordPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10">
        <div className="text-center mb-8 flex flex-col items-center">
          <Link href="/">
            <div className="flex size-14 items-center justify-center rounded-full bg-teal-600 text-white shadow-sm mb-4">
              <Car className="size-7" />
            </div>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Forgot Password
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-[280px]">
            Enter your registered email to receive a One-Time Password (OTP)
          </p>
        </div>

        <ForgotPasswordForm />
      </div>
      
      <div className="absolute bottom-6 right-6">
        <p className="text-xs text-slate-400">A product by <span className="font-semibold text-teal-600">Techifyhouse</span></p>
      </div>
    </div>
  );
}
