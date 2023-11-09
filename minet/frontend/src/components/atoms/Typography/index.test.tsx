import React from "react";
import { render, screen } from "@testing-library/react";
import MyTypo, { TypographyProps } from "./index";
import "@testing-library/jest-dom/extend-expect";

test("should render typography component", () => {
  const props: TypographyProps = {
    variant: "h1",
    color: "red",
    label: "Hello",
  };

  render(<MyTypo {...props} />);

  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
  expect(textElement).toHaveStyle("color: red");
});

test("should render typography component with default variant if not provided", () => {
  const props: TypographyProps = {
    color: "red",
    label: "Hello",
  };

  render(<MyTypo {...props} />);

  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();

  // Assert the default variant style of the rendered text
  expect(textElement).toHaveStyle("font-size: 1rem");
  expect(textElement).toHaveStyle("font-weight: 400");
});

test("should render typography component with default color when no color prop is provided", () => {
  const props: TypographyProps = {
    variant: "h1",
    label: "Hello",
  };

  render(<MyTypo {...props} />);

  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();

  // Assert the default color style of the rendered text
  expect(textElement).toHaveStyle("color: auto");
});
