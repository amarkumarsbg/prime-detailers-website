import { apiClient } from "@/lib/api-client";
import type { PricingQuote } from "@/types";

/**
 * Get a server-calculated pricing quote.
 *
 * NOTE: This endpoint (POST /api/organization/subscription/pricing) currently
 * requires authentication (requireAuth middleware). It CANNOT be called from the
 * public pricing calculator without a logged-in session.
 *
 * MISSING API: POST /api/public/pricing — an unauthenticated pricing-quote
 * endpoint is required for the public website's pricing calculator.
 * Until that endpoint exists, the public calculator shows indicative pricing
 * sourced from the plan config and disables the "Get exact quote" button.
 */
export async function getPricingQuote(input: {
  termMonths: 12 | 24 | 36 | 60;
  extraBranches?: number;
  extraUsers?: number;
  referralCode?: string | null;
}): Promise<PricingQuote> {
  return apiClient.post<PricingQuote>("/api/organization/subscription/pricing", input);
}
