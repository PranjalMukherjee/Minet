import { act, render } from "@testing-library/react";
import TradePage from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import * as router from "react-router";
import { BACKEND_URL } from "../../utils/constant";
jest.mock("../../utils/Api", () => {
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
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockTradeData = [
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
    image:
      "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
    current_price: 0.062905,
    market_cap: 8879516816,
    total_volume: 7782735269,
    price_change_percentage_24h: 1.63928,
    circulating_supply: 120226214.385441,
    total_supply: 21000000,
    is_watchlisted: false,
  },
];
const mockWacthlistTradeData = [
  {
    id: "dogecoin",
    userId: "1",
    coinId: "1",
    watchlist: false,
  },
];

jest.mock("../../services/watchlist", () => ({
  getCoins: jest.fn(() =>
    Promise.resolve([
      {
        coinId: "binancecoin",
        id: "0281e031-ad49-4271-9543-1f5a358f79f4",
        userId: "1",
        watchlist: true,
      },
    ])
  ),
  getWatchlistByUser: jest.fn(() =>
    Promise.resolve([
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
    ])
  ),
}));
mockedAxios.get.mockImplementation((url) => {
  switch (url) {
    case `${BACKEND_URL}/crypto/coins`:
      return Promise.resolve({
        data: mockTradeData,
      });
    case `${BACKEND_URL}/crypto/watchlist?userId=1`:
      return Promise.resolve({ data: mockWacthlistTradeData });

    default:
      return Promise.reject(new Error("not found"));
  }
});

jest.spyOn(router, "useLocation").mockImplementation(() => {
  return {
    pathname: "/",
    search: "",
    hash: "",
    state: { selectedTab: 1 },
    key: "",
  };
});
test("should render trade page", () => {
  let element;
  act(() => {
    element = render(
      <BrowserRouter>
        <TradePage />
      </BrowserRouter>
    );
  });
  expect(element).toBeDefined();
});