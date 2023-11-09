import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ChipAtom from ".";

test("should render chip with text Bitcoins", () => {
  const chipLabel = "Test Chip";
  const { getByText } = render(<ChipAtom chipLabel={chipLabel} />);
  const chipElement = getByText(chipLabel);
  expect(chipElement).toBeInTheDocument();
});
