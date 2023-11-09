import { render } from "@testing-library/react";
import ResetCard from ".";
import React from "react";

test("render component", () => {
  const element = render(<ResetCard />);
  expect(element).toBeDefined();
});
