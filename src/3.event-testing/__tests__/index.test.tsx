import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from "..";

describe("Event Testing", () => {
  test("Should call onChange one times", () => {
    const mockOnChange = jest.fn();
    render(<Form onChange={mockOnChange} />);

    const input = screen.getByLabelText("input name");

    // simulate programaticaly change input value
    fireEvent.change(input, { target: { value: "John Doe" } });

    // if use fireEvent mock onChange will be called one times
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test("Should call onChange as many times as the words are typed", async () => {
    const mockOnChange = jest.fn();
    render(<Form onChange={mockOnChange} />);

    const input = screen.getByLabelText("input name");

    // simulate real user typing
    await userEvent.type(input, "John Doe");

    // if use fireEvent mock onChange will be called eight times
    expect(mockOnChange).toHaveBeenCalledTimes(8);
  });
});
