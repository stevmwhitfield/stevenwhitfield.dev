import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a page", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { name: /Steven Whitfield/i });

    expect(heading).toBeInTheDocument();
  });
});
