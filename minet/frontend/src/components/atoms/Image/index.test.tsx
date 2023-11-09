import React from "react";
import ImageAtom from ".";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should render image with source image", () => {
  const { container } = render(<ImageAtom sourceImage="mocked-image-url" />);
  const imageElement = container.querySelector("img");
  expect(imageElement).toBeDefined();
});
