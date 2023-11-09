import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TransactionCard from ".";
import "@testing-library/jest-dom";
test("renders TransactionCard component", () => {
  const { getByTestId } = render(
    <TransactionCard
      amount="0.5234510 ETH"
      headerStatement="You are buying"
      unit="1ETH = $1,297.93"
      handleTransaction={() => {}}
      paymentSource="Visa credit ...8845"
      deliveryFees="0.005 ETH"
      deposit="Etherium wallet"
      totalCurrencyAmount="$648.54"
      totalAmount="0.0234510 ETH"
      buttonLabel="BUY NOW"
      totalCurrencyQuantity="$678.54"
    />
  );
  const transactionComponent = getByTestId("test-transaction");
  expect(transactionComponent).toBeInTheDocument();
});
test("renders TransactionCard component", async() => {
  
  render(
    <TransactionCard
      amount="0.5234510 ETH"
      headerStatement="You are buying"
      unit="1ETH = $1,297.93"
      handleTransaction={() => {}}
      paymentSource="Visa credit ...8845"
      deliveryFees="0.005 ETH"
      deposit="Etherium wallet"
      totalCurrencyAmount="$648.54"
      totalAmount="0.0234510 ETH"
      buttonLabel="BUY NOW"
      totalCurrencyQuantity="$678.54"
    />
  );
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(button).toBeInTheDocument();
});
