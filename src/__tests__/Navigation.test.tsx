// Navigation.test.tsx
import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation";

test("shows nav buttons", () => {
  render(<Navigation parentToChild={{ mode: "light" }} modeChange={() => {}} />);
  ["Skills", "Experience", "Projects", "Contact"].forEach((txt) => {
    expect(screen.getByRole("button", { name: txt })).toBeInTheDocument();
  });
});
