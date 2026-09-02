import { USE_MOCK_PUBLIC_API } from "@/config/site";
import * as signupApi from "@/api/signup";
import type { SignupInput, SignupResult } from "@/types";

function delay(ms = 1100) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Public signup entrypoint. Uses mock success until POST /api/public/signup is connected.
 */
export async function signupPublic(input: SignupInput): Promise<SignupResult> {
  if (!USE_MOCK_PUBLIC_API) {
    return signupApi.signup(input);
  }

  await delay();

  if (!input.email || !input.password || !input.businessName) {
    throw new Error("Please complete all required fields.");
  }

  return {
    accessToken: "mock-access-token",
    organizationId: "mock-org",
    user: {
      id: "mock-user",
      name: input.ownerName,
      email: input.email,
      role: "ADMIN",
      organizationId: "mock-org",
      branchId: "mock-branch",
    },
  };
}
