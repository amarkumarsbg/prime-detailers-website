import { render, screen } from "@testing-library/react";
import PricingPage from "@/app/pricing/page";

describe("pricing page", () => {
  it("renders basic plan and calculator", () => {
    render(<PricingPage />);

    expect(screen.getByRole("heading", { name: /simple, scalable pricing/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /basic plan/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /get exact quote/i })).toBeInTheDocument();
  });
});
