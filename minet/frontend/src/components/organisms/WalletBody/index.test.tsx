import React from "react";
import { render, waitFor } from "@testing-library/react";
import WalletBody from ".";
import "@testing-library/jest-dom";

jest.mock("axios");
const mockCryptoData = [
  {
    id: "1",
    purchasePrice: 23.412,
    purchaseDate: "2023-12-21",
    sellPrice: 421.424,
    sellDate: "2023-12-21",
    quantity: 3,

    userId: "1",
    cryptoId: "bitcoin",
    brokerName: "XYZPeople",
  },
];
const mockTransactionData = [
  {
    status: "Success",
    date: "2023-12-21",
    type: "Sold",
    cryptoHoldingId: "1",
  },
];
const mockCoinData = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 27277,
    market_cap: 532446077882,
    total_volume: 14152139654,
    price_change_percentage_24h: 0.06372,
    circulating_supply: 19490343,
    total_supply: 21000000,
    is_watchlisted: true,
  },
];
jest.mock("../../../services/portfolio", () => ({
  getTransactions: jest.fn(() => Promise.resolve(mockTransactionData)),
  getAllCrypto: jest.fn(() => Promise.resolve(mockCryptoData))
}));
jest.mock("../../../services/watchlist", () => ({
  getCoins: jest.fn(() => Promise.resolve(mockCoinData))
}));
jest.mock("../../../utils/Utility", () => ({
  getUserIdFromSessionStorage: jest.fn(() => "1"),
  getMonth: jest.fn(() => "9"),
  getDate: jest.fn(() => "9"),
}));
test("renders WalletBody component", async () => {
  const { getByTestId } = render(
    <WalletBody
      totalBalance={34000}
      header={false}
      showWallet={true}
      showAllTranscation={false}
    />
  );
  const walletComponent = getByTestId("wallet-test");

  expect(walletComponent).toBeInTheDocument();
});
test("renders WalletBody component USD Wallets", () => {
  const { getByTestId } = render(
    <WalletBody
      totalBalance={34000}
      header={false}
      showWallet={true}
      showAllTranscation={true}
    />
  );
  const walletComponent = getByTestId("wallet-test");
  expect(walletComponent).toBeInTheDocument();
});

test("renders WalletBody component with totalQuantity and totalAmount", async () => {
  const { getByTestId } = render(
    <WalletBody
      totalBalance={34000}
      header={false}
      showWallet={true}
      showAllTranscation={false}
      coinName="BTC"
    />
  );
  const walletComponent = getByTestId("wallet-test");
  expect(walletComponent).toBeInTheDocument();
  const totalQuantity = mockCryptoData.reduce(
    (sum, transaction) => sum + transaction.quantity,
    0
  );
  const totalAmount = mockCryptoData.reduce(
    (sum, transaction) =>
      sum + (transaction.purchasePrice || transaction.sellPrice),
    0
  );
  await waitFor(() => {
    expect(totalQuantity).toBeDefined();
    expect(totalAmount).toBeDefined();
  });
});
