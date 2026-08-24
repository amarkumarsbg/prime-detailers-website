import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { PricingCalculator } from "@/features/pricing/pricing-calculator";
import * as pricingApi from "@/api/pricing";

jest.mock("@/api/pricing");

describe("pricing calculator", () => {
  it("shows backend quote breakdown", async () => {
    jest.spyOn(pricingApi, "getPricingQuote").mockResolvedValueOnce({
      planCode: "STARTER",
      planName: "Basic",
      termMonths: 12,
      termLabel: "1 Year",
      baseBranches: 1,
      baseUsers: 3,
      extraBranches: 1,
      extraUsers: 2,
      basePlanAmount: 10000,
      extraBranchAmount: 2000,
      extraUserAmount: 1000,
      onboardingFee: 500,
      subtotal: 13500,
      referralDiscount: 500,
      taxableAmount: 13000,
      gstRate: 18,
      gstAmount: 2340,
      totalAmount: 15340,
      currency: "INR",
    });

    render(<PricingCalculator />);

    fireEvent.click(screen.getByRole("button", { name: /get exact quote/i }));

    await waitFor(() => {
      expect(screen.getByText(/final amount/i)).toBeInTheDocument();
      expect(screen.getByText(/₹15,340.00/)).toBeInTheDocument();
    });
  });
});
