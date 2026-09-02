import { USE_MOCK_PUBLIC_API } from "@/config/site";
import * as contactApi from "@/api/contact";
import type { ContactFormInput } from "@/types";

function delay(ms = 800) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function submitContactPublic(
  input: ContactFormInput
): Promise<{ message: string }> {
  if (!USE_MOCK_PUBLIC_API) {
    return contactApi.submitContact(input);
  }

  await delay();

  if (!input.email || !input.message) {
    throw new Error("Please complete all required fields.");
  }

  return {
    message: "Thanks for reaching out. Our team will follow up shortly. (Demo submission)",
  };
}
