import { render, screen } from "@testing-library/react";
import PricingPage from "@/app/pricing/page";

describe("pricing page", () => {
  it("renders basic plan and calculator", () => {
    render(<PricingPage />);

    expect(screen.getByRole("heading", { name: /premium saas pricing, built for workshop growth/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /1 branch • 3 users/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /get exact quote/i })).toBeInTheDocument();
  });
});
