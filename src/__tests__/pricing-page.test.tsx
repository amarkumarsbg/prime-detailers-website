import { render, screen } from "@testing-library/react";
import PricingPage from "@/app/pricing/page";

describe("pricing page", () => {
  it("renders centralized plan cards", () => {
    render(<PricingPage />);

    expect(
      screen.getByRole("heading", { name: /transparent plans for growing workshops/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /starter/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /growth/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /business/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /enterprise/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /start free trial/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /contact sales/i })).toBeInTheDocument();
  });
});
