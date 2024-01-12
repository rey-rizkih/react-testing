/* eslint-disable no-console */
import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import Component from "..";

describe("Mocking", () => {
  test("mock global function with jest spyOn", () => {
    // Spy window location
    const locationSpy = jest.spyOn(window, "location", "get");

    // mock reload with dummy function
    locationSpy.mockReturnValue({
      reload: () => console.log("reload"),
    } as Location);

    render(<Component />);

    fireEvent.click(screen.getByRole("button", { name: "reload" }));
  });
});
