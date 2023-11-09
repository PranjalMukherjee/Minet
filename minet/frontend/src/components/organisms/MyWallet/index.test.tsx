import { render, act } from "@testing-library/react";
import React from "react";
import RecentTransaction from "../../../../public/images/recentTranscations.svg";
import MyWallet from ".";
import ImageAtom from "../../atoms/Image";
import "@testing-library/jest-dom";

jest.mock("axios");

const mockWalletData = {
  total_balance: 1000,
};
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

jest.mock("../../../utils/Api", () => {
  const instanceMock = {
    create: jest.fn(() => ({
      interceptors: {
        request: {
          use: jest.fn(),
        },
      },
    })),
    post: jest.fn(),
    get: jest.fn(),
  };

  return {
    __esModule: true,
    default: instanceMock,
  };
});

jest.mock("../../../services/watchlist", () => ({
  getCoins: jest.fn(() => Promise.resolve(mockCoinData)),
}));

jest.mock("../../../services/details", () => ({
  fetchWalletData: jest.fn(() => Promise.resolve(mockWalletData)),
}));

jest.mock("../../../services/portfolio", () => ({
  getAllCrypto: jest.fn(() => Promise.resolve(mockCryptoData)),
  getTransactions: jest.fn(() => Promise.resolve(mockTransactionData)),
}));
jest.mock("../../../utils/Utility", () => ({
  getUserIdFromSessionStorage: jest.fn(() => "1"),
  getMonth: jest.fn(() => "9"),
  getDate: jest.fn(() => "9"),
}));
test("should render component and handle view all when it is false", async () => {
  let element;
  await act(async () => {
    element = render(
      <MyWallet
        cost={"100"}
        recentTransaction={
          <ImageAtom
            sourceImage={RecentTransaction}
            style={{ width: 350, height: 90, top: 208, left: 24 }}
          />
        }
      />
    );
  });
  expect(element!.baseElement).toBeDefined();
});
