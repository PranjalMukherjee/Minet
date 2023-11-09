import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CurrencySelector from ".";
import "@testing-library/jest-dom";
test("renders CurrencySelector component", () => {
  const { getByTestId } = render(
    <CurrencySelector handleCurrencyClick={() => {}} />
  );
  const currencyComponent = getByTestId("currency_test");
  expect(currencyComponent).toBeInTheDocument();
});
test("clicking on a chip triggers onClick handler", () => {
  const handleCurrencyClickMock = jest.fn();
  const { getByTestId } = render(
    <CurrencySelector handleCurrencyClick={handleCurrencyClickMock} />
  );

  const chip = getByTestId("chip-atom-Bitcoin");

  fireEvent.click(chip);

  expect(handleCurrencyClickMock).toHaveBeenCalledWith(expect.any(Number));
});
test("clicking on a chip triggers onClick handler", () => {
  const handleCurrencyClickMock = jest.fn();
  const { getByTestId } = render(
    <CurrencySelector handleCurrencyClick={handleCurrencyClickMock} />
  );

  const chip = getByTestId("chip-atom-Ethereum");

  fireEvent.click(chip);

  expect(handleCurrencyClickMock).toHaveBeenCalledWith(expect.any(Number));
});
test("clicking on a chip toggles state", () => {
  const { getByTestId } = render(
    <CurrencySelector handleCurrencyClick={() => {}} />
  );

  const chip = getByTestId("chip-atom-Bitcoin");
  expect(chip).toHaveStyle("border: 0px");
  fireEvent.click(chip);
  expect(chip).toHaveStyle("border: 3px solid #F7931A");
  fireEvent.click(chip);

  expect(chip).toHaveStyle("border: 0px");
});
