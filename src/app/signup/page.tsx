import type { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "@/features/auth/signup-form";
import { buildMetadata } from "@/lib/metadata";
import { Car } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Start Free Trial",
  description: "Start your Prime Detailers free trial and set up your workshop account.",
  path: "/signup",
});

export default function SignupPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10">
        <div className="text-center mb-8 flex flex-col items-center">
          <Link href="/">
            <div className="flex size-14 items-center justify-center rounded-full bg-teal-600 text-white shadow-sm mb-4">
              <Car className="size-7" />
            </div>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Create Your Account
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Get started with a 7-day premium trial
          </p>
        </div>

        <SignupForm />
      </div>
    </div>
  );
}
