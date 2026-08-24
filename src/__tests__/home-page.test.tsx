import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("home page", () => {
  it("renders headline and ctas", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /run your workshop like a modern business/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /sign up/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /book a demo/i }).length).toBeGreaterThan(0);
  });
});
