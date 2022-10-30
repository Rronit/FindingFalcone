/**
 * @jest-environment jsdom
 */
// the above comment helps

import React from "react";
import { Header } from "../Header";
import { fireEvent, render } from "@testing-library/react";

describe("renders the finding falcon header", () => {
  test("renders with text", async () => {
    const { getByText } = render(<Header />);
    const headElement = getByText(/Finding Falcone/i);
    expect(headElement).toBeInTheDocument();
  });
  test("renders with button and button onclick function is callled", async () => {
    const { getByRole } = render(<Header />);
    const buttonElement = getByRole("button", { hidden: true });
    expect(buttonElement).toBeInTheDocument();
    const mockSubmit = jest.fn();
    buttonElement.onclick = mockSubmit;
    await fireEvent.click(buttonElement);
    expect(mockSubmit).toHaveBeenCalled();
  });
});
