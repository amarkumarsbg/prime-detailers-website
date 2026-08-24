import { ApiError } from "@/lib/api-client";
import type { SignupInput, SignupResult } from "@/types";

const SIGNUP_ENDPOINT_AVAILABLE = false;

export async function signup(_input: SignupInput): Promise<SignupResult> {
	void _input;
	if (!SIGNUP_ENDPOINT_AVAILABLE) {
		throw new ApiError(
			501,
			"Signup API is not available yet. Missing endpoint: POST /api/public/signup"
		);
	}

	throw new ApiError(501, "Signup API integration is pending backend availability.");
}
