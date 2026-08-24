import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("home page", () => {
  it("renders headline and ctas", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /run your workshop smarter/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /get started/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view pricing/i })).toBeInTheDocument();
  });
});
