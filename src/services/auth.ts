import { USE_MOCK_PUBLIC_API } from "@/config/site";
import * as authApi from "@/api/auth";
import type { AuthSession } from "@/types";

function delay(ms = 900) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Public login entrypoint. Uses mock response until backend auth is connected.
 */
export async function loginPublic(email: string, password: string): Promise<AuthSession> {
  if (!USE_MOCK_PUBLIC_API) {
    return authApi.login(email, password);
  }

  await delay();

  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  if (password.length < 6) {
    throw new Error("Invalid email or password.");
  }

  return {
    accessToken: "mock-access-token",
    user: {
      id: "mock-user",
      name: "Workshop Owner",
      email,
      role: "ADMIN",
      organizationId: "mock-org",
      branchId: "mock-branch",
    },
  };
}
