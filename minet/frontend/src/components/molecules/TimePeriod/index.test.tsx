import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TimePeriod from "./";

test("renders time periods and handles selection", () => {
  const { getByText } = render(<TimePeriod isUnderlined={true} />);

  const initialSelectedText = getByText("1M");
  expect(initialSelectedText).toHaveStyle("text-decoration: underline");

  const timePeriodToSelect = getByText("1Y");
  fireEvent.click(timePeriodToSelect);

  expect(timePeriodToSelect).toHaveStyle("text-decoration: underline");
  expect(initialSelectedText).toHaveStyle("text-decoration: none");
});

test("changes the selected time period", () => {
  const { getByText } = render(<TimePeriod isUnderlined={true} />);

  const initialSelectedText = getByText("1M");
  const timePeriodToSelect = getByText("1Y");

  fireEvent.click(timePeriodToSelect);

  expect(initialSelectedText).toHaveStyle("text-decoration: none");
  expect(timePeriodToSelect).toHaveStyle("text-decoration: underline");
});
test("should render time periods and handle selection when underline is false", () => {
  const { getByText } = render(<TimePeriod isUnderlined={false} />);

  const initialSelectedText = getByText("1M");
  expect(initialSelectedText).toBeDefined();
});
