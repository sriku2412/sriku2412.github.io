// Main.test.tsx
import { render, screen } from "@testing-library/react";
import Main from "../components/Main";

test("renders name and links", () => {
  render(<Main />);
  expect(screen.getByText(/Sreekanth Potlabathini/i)).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: /github/i })[0]).toHaveAttribute(
    "href",
    expect.stringContaining("github.com/sriku2412")
  );
});
