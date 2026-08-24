import { ApiError } from "@/lib/api-client";
import type { ContactFormInput } from "@/types";

const CONTACT_ENDPOINT_AVAILABLE = false;

export async function submitContact(_input: ContactFormInput): Promise<{ message: string }> {
	void _input;
	if (!CONTACT_ENDPOINT_AVAILABLE) {
		throw new ApiError(
			501,
			"Contact API is not available yet. Missing endpoint: POST /api/public/contact"
		);
	}

	throw new ApiError(501, "Contact API integration is pending backend availability.");
}
