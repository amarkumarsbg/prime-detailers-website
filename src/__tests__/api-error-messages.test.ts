import { ApiError } from "@/lib/api-client";
import { mapApiError } from "@/lib/error-messages";

describe("api error mapping", () => {
  it("maps common HTTP statuses", () => {
    expect(mapApiError(new ApiError(400, "bad"))).toMatch(/invalid/i);
    expect(mapApiError(new ApiError(401, "unauth"))).toMatch(/invalid credentials/i);
    expect(mapApiError(new ApiError(403, "forbidden"))).toMatch(/permission/i);
    expect(mapApiError(new ApiError(429, "rate limit"))).toMatch(/too many requests/i);
    expect(mapApiError(new ApiError(409, "conflict"))).toMatch(/already exists/i);
    expect(mapApiError(new ApiError(422, "unprocessable"))).toMatch(/invalid/i);
    expect(mapApiError(new ApiError(500, "error"))).toMatch(/server error/i);
  });
});
