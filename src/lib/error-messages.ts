import { ApiError } from "@/lib/api-client";

export function mapApiError(error: unknown): string {
  if (error instanceof ApiError) {
    if (error.status === 400) return "The request is invalid. Please check your details.";
    if (error.status === 401) return "Invalid credentials. Please verify your email and password.";
    if (error.status === 403) return "You do not have permission to perform this action.";
    if (error.status === 409) return "This record already exists. Please use different details.";
    if (error.status === 422) return "Some fields are invalid. Please correct and try again.";
    if (error.status >= 500) return "Server error. Please try again in a moment.";
    return error.message;
  }

  if (error instanceof Error) return error.message;
  return "Something went wrong. Please try again.";
}
