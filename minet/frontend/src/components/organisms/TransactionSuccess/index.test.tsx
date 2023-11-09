import React from "react";
import { render } from "@testing-library/react";
import TransactionSuccess from ".";
import "@testing-library/jest-dom";
test("renders TransactionSuccess component", () => {
  const { getByTestId } = render(
    <TransactionSuccess amount={""} message={""} coinLabel={""}  />
  );
  const transactionComponent = getByTestId("transaction-test");
  expect(transactionComponent).toBeInTheDocument();
});