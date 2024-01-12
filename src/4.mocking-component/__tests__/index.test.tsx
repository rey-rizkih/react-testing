/* eslint-disable no-console */
import React from "react";

import { render } from "@testing-library/react";

import Component from "..";

jest.mock("../BigComponent", () => () => (
  <p data-testid="mock-big-component" />
));

describe("Mocking", () => {
  test("mock component with jest mock", () => {
    const { container } = render(<Component />);

    expect(container).toMatchSnapshot();
  });
});
