import { fireEvent, render, screen } from "@testing-library/react";
import SliderAtom from ".";
import React from "react";

test("render slider", () => {
  const onChange = jest.fn();
  const element = render(<SliderAtom min={0} max={100} onChange={onChange} />);
  expect(element).toBeDefined();
  const slider = screen.getByRole("slider");
  fireEvent.change(slider, { target: { value: 75 } });
  expect(onChange).toBeCalled();
});
