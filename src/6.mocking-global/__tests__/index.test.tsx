import React from "react";

import { render } from "@testing-library/react";

import Galery from "..";

describe("Mocking", () => {
  test("todos list", async () => {
    const { container } = render(<Galery />);

    expect(container).toMatchSnapshot();
  });
});
