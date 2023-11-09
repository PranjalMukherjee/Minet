import { fireEvent, render, screen } from "@testing-library/react";
import ButtonAtom from ".";
import React from "react";

test("render button", () => {
  const onClick = jest.fn();
  const element = render(<ButtonAtom onClick={onClick}>signin</ButtonAtom>);
  expect(element).toBeDefined();
  const button = screen.getByText("signin");
  fireEvent.click(button);
  expect(onClick).toBeCalled();
});
