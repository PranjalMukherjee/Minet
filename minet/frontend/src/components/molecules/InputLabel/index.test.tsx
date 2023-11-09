import React from "react";
import { render } from "@testing-library/react";
import InputLabel from "./index";
import "@testing-library/jest-dom";
describe("InputLabel", () => {
  it("renders the component with props", () => {
    const props = {
      color: "red",
      label: "Test Label",
      placeholder: "Test Placeholder",
      height: 40,
      width: 200,
      border: 1,
      bradius: 5,
      bcolor: "blue",
      bgcolor: "white",
    };
    const { getByText, getByPlaceholderText } = render(<InputLabel {...props} />);

    const labelElement = getByText("Test Label");
    const inputElement = getByPlaceholderText("Test Placeholder");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveStyle("height: 1.4375em");
    expect(inputElement).toHaveStyle("width: 100%");

  });
});
