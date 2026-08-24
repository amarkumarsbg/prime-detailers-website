import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "@/components/layout/navbar";

describe("mobile navigation", () => {
  it("opens menu when hamburger is clicked", () => {
    render(<Navbar />);

    const toggle = screen.getByLabelText(/toggle navigation menu/i);
    fireEvent.click(toggle);

    expect(screen.getAllByRole("link", { name: /features/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("button", { name: /sign up/i }).length).toBeGreaterThan(0);
  });
});
