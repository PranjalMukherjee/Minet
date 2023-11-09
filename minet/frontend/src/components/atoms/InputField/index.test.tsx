import "@testing-library/jest-dom";
import InputFieldAtom from ".";
import React from "react";
import { render } from "@testing-library/react";

test("should render input text field as required", () => {
  const { container } = render(
    <InputFieldAtom
      inputId="email"
      isRequired={true}
      placeholder={"you@example.com"}
    />
  );
  const inputElement = container.querySelector("input");
  expect(inputElement).toBeDefined();
  expect(inputElement).toBeRequired();
});
