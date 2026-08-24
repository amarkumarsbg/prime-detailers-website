import { apiClient } from "@/lib/api-client";
import type { PricingQuote } from "@/types";
import { ApiError } from "@/lib/api-client";

export async function getPricingQuote(input: {
  termMonths: 12 | 24 | 36 | 60;
  extraBranches?: number;
  extraUsers?: number;
  referralCode?: string | null;
}): Promise<PricingQuote> {
  try {
    return await apiClient.post<PricingQuote>("/api/public/pricing/quote", input);
  } catch (error) {
    if (error instanceof ApiError && (error.status === 404 || error.status === 405)) {
      return apiClient.post<PricingQuote>("/api/public/subscription/pricing", input);
    }
    throw error;
  }
}
