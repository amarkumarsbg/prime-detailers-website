import { apiClient } from "@/lib/api-client";
import type { ContactFormInput } from "@/types";

export async function submitContact(input: ContactFormInput): Promise<{ message: string }> {
  return apiClient.post<{ message: string }>("/api/public/contact", input);
}
