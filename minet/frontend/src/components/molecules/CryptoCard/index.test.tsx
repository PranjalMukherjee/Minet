import React from "react";
import { render } from "@testing-library/react";
import CryptoCard from ".";
import "@testing-library/jest-dom";
import Bitcoin from "../../../../public/images/bitcoin.svg";
test("renders checked CryptoCard component", () => {
  const { getByTestId, queryByTestId } = render(
    <CryptoCard
      isChecked={true}
      currencyName="Bitcoin"
      currencyImage={Bitcoin}
      currencyValue="$3,406,069.54"
    />
  );
  const CardComponent = getByTestId("checked-card");
  const IconComponent = queryByTestId("icon-check");
  expect(CardComponent).toBeDefined();
  expect(IconComponent).toBeDefined();
});
test("renders unchecked CryptoCard component", () => {
  const { getByTestId, queryByTestId } = render(
    <CryptoCard
      isChecked={false}
      currencyName="Bitcoin"
      currencyImage={Bitcoin}
      currencyValue="$3,406,069.54"
    />
  );
  const CardComponent = getByTestId("checked-card");
  const IconComponent = queryByTestId("icon-Bitcoin");
  expect(CardComponent).toBeDefined();
  expect(IconComponent).toBeDefined();
});
