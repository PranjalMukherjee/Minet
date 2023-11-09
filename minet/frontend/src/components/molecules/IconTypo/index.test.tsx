import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IconTypo from ".";

test("renders icon and text correctly", () => {
  const iconImage = "icon.png";
  const text = "Sample Text";

  render(<IconTypo iconImge={iconImage} text={text} />);

  const iconElement = screen.getByTestId("image");
  expect(iconElement).toBeDefined();

  const textElement = screen.getByTestId("typography");
  expect(textElement).toBeDefined();
});
