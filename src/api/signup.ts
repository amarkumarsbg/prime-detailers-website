import { apiClient, setToken } from "@/lib/api-client";
import type { SignupInput, SignupResult } from "@/types";

export async function signup(input: SignupInput): Promise<SignupResult> {
  const result = await apiClient.post<SignupResult>("/api/public/signup", input);
  if (result.accessToken) {
    setToken(result.accessToken);
  }
  return result;
}
