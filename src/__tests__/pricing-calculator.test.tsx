import { pricingPlans } from "@/data/pricing";

describe("pricing mock data", () => {
  it("keeps plans centralized with required fields", () => {
    expect(pricingPlans).toHaveLength(4);
    expect(pricingPlans.map((plan) => plan.id)).toEqual([
      "starter",
      "growth",
      "business",
      "enterprise",
    ]);

    for (const plan of pricingPlans) {
      expect(plan.name).toBeTruthy();
      expect(plan.ctaHref).toBeTruthy();
      expect(plan.features.length).toBeGreaterThan(0);
    }
  });
});
