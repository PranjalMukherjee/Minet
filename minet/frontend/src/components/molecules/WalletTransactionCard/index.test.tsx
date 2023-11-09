import React from "react";
import { render, screen } from "@testing-library/react";
import WalletTransactionCard from ".";
import AvatorAtom from "../../atoms/Avator";
import Tick from "../../../../public/images/tic.svg";
import Pending from "../../../../public/images/pending.svg";
import Rejected from "../../../../public/images/rejected.svg";
const tradeCardProps = {
  cost: "0.0010",
  cryptoName: "Bitcoin",
  crytoAction: "Purchased",
  date: "28",
  month: "Feb",
  name: "Badgley",
  symbol: "BTC",
  transactionStatus: "tick",
  income: "1000",
};
test("should renders the WalletTransactionCard component if purchased", () => {
  render(<WalletTransactionCard {...tradeCardProps} />);

  expect(screen.getByText("Bitcoin")).toBeDefined();
  expect(screen.getByText("Purchased")).toBeDefined();
  expect(screen.getByText("From : Badgley")).toBeDefined();
});
test("should renders the WalletTransactionCard component if sold", () => {
  render(<WalletTransactionCard {...tradeCardProps} crytoAction="Sold" />);

  expect(screen.getByText("Bitcoin")).toBeDefined();
  expect(screen.getByText("Sold")).toBeDefined();
  expect(screen.getByText("To : Badgley")).toBeDefined();
});
test("should renders the WalletTransactionCard component if status is tick", () => {
  render(<WalletTransactionCard {...tradeCardProps} />);
  const element = render(<AvatorAtom src={Tick} />);
  expect(element).toBeDefined();
  expect(screen.getByText("Bitcoin")).toBeDefined();
  expect(screen.getByText("Purchased")).toBeDefined();
  expect(screen.getByText("From : Badgley")).toBeDefined();
});
test("should renders the WalletTransactionCard component if status is pending", () => {
  render(
    <WalletTransactionCard {...tradeCardProps} transactionStatus="pending" />
  );
  const element = render(<AvatorAtom src={Pending} />);
  expect(element).toBeDefined();
  expect(screen.getByText("Bitcoin")).toBeDefined();
  expect(screen.getByText("Purchased")).toBeDefined();
  expect(screen.getByText("From : Badgley")).toBeDefined();
});
test("should renders the WalletTransactionCard component if status is success", () => {
  render(
    <WalletTransactionCard {...tradeCardProps} transactionStatus="success" />
  );
  const element = render(<AvatorAtom src={Tick} />);
  expect(element).toBeDefined();
  expect(screen.getByText("Bitcoin")).toBeDefined();
  expect(screen.getByText("Purchased")).toBeDefined();
  expect(screen.getByText("From : Badgley")).toBeDefined();
});
test("should renders the WalletTransactionCard component if status is rejected", () => {
  render(
    <WalletTransactionCard {...tradeCardProps} transactionStatus="rejected" />
  );
  const element = render(<AvatorAtom src={Rejected} />);
  expect(element).toBeDefined();
  expect(screen.getByText("Bitcoin")).toBeDefined();
  expect(screen.getByText("Purchased")).toBeDefined();
  expect(screen.getByText("From : Badgley")).toBeDefined();
});
