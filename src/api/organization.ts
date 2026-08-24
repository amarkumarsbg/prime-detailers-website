import { apiClient } from "@/lib/api-client";

interface OrganizationProfile {
  id: string;
  name: string;
  code?: string;
  status?: string;
}

/**
 * Organization creation is platform-admin only in the current backend.
 * Public self-serve signup should use POST /api/public/signup when available.
 */
export async function createOrganizationAsPlatform(input: {
  name: string;
  code: string;
}): Promise<OrganizationProfile> {
  return apiClient.post<OrganizationProfile>("/api/platform/organizations", input);
}
