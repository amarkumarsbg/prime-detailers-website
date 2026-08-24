import { apiClient, setToken, clearToken } from "@/lib/api-client";
import type { AuthSession, AuthUser } from "@/types";

export async function login(email: string, password: string): Promise<AuthSession> {
  const session = await apiClient.post<AuthSession>("/api/auth/login", { email, password });
  setToken(session.accessToken);
  return session;
}

export async function getMe(): Promise<AuthUser> {
  return apiClient.get<AuthUser>("/api/auth/me");
}

export async function forgotPassword(email: string): Promise<{ message: string }> {
  return apiClient.post("/api/auth/forgot-password", { email });
}

export async function getResetPasswordStatus(token: string): Promise<{ valid: boolean }> {
  return apiClient.get(`/api/auth/reset-password/status?token=${encodeURIComponent(token)}`);
}

export async function resetPassword(
  token: string,
  newPassword: string
): Promise<{ message: string }> {
  return apiClient.post("/api/auth/reset-password", { token, newPassword });
}

export function logout(): void {
  clearToken();
}
