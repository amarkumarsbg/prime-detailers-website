import { fireEvent, render, screen } from "@testing-library/react";
import { SignupForm } from "@/features/auth/signup-form";

describe("signup form", () => {
  it("validates password confirmation and has referral input", async () => {
    render(<SignupForm />);

    fireEvent.change(screen.getByLabelText(/business name/i), { target: { value: "Prime Auto" } });
    fireEvent.change(screen.getByLabelText(/owner name/i), { target: { value: "Aman" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "owner@example.com" } });
    fireEvent.change(screen.getByLabelText(/^phone/i), { target: { value: "9999999999" } });
    fireEvent.change(screen.getByLabelText(/^password$/i), { target: { value: "abcd1234" } });
    fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: "abcd9999" } });

    expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/referral code/i)).toBeInTheDocument();
  });
});
