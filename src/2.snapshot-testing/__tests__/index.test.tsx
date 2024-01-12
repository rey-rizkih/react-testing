import { render } from "@testing-library/react";

import Component from "..";

describe("Snapshot Testing", () => {
  test("Should match snapshot", () => {
    // 1. Render Component
    const { container } = render(<Component />);

    // 2. Make a snapshot or compare
    expect(container).toMatchSnapshot();
  });
});
