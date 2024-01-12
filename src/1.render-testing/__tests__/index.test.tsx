import { render, screen } from "@testing-library/react";

import Component from "..";

describe("Render Testing", () => {
  test("Should render component", () => {
    // 1. Render Component
    render(<Component />);

    // 2. Select element by aria-label
    const element = screen.getByLabelText("Component");

    // 3. The expectation is element in the document
    expect(element).toBeInTheDocument();
  });
});
