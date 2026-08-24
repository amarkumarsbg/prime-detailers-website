import { apiClient } from "@/lib/api-client";

interface SubscriptionInfo {
  planCode: string;
  planName: string;
  status: string;
  expiresAt: string | null;
  daysRemaining: number | null;
  termMonths: number;
  paymentStatus: string;
}

export async function getMySubscription(): Promise<SubscriptionInfo> {
  return apiClient.get<SubscriptionInfo>("/api/organization/subscription");
}

export async function renewSubscription(input: {
  termMonths?: 12 | 24 | 36 | 60;
  extraBranches?: number;
  extraUsers?: number;
  referralCode?: string | null;
  method?: string;
  notes?: string;
}): Promise<unknown> {
  return apiClient.post("/api/organization/subscription/renew", input);
}
