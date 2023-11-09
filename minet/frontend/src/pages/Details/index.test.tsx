import { fireEvent, render, screen } from "@testing-library/react";
import DetailsPage from ".";
import React from "react";
import * as router from "react-router";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { getCoinById } from "../../services/details";

jest.mock("@nivo/line", () => ({
  ResponsiveLine: () => <div data-testid="mocked-responsive-line" />,
}));
const navigate = jest.fn();
jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockTransationData = [
  {
    id: 2,
    status: "SUCCESS",
    date: "22-12-2023",
    transaction_type: "BUY",
    coin_name: "bitcoin",
    purchase_price: 1100,
    purchase_date: "22-10-2022",
    quantity: 0.11,
    symbol: "BTC",
    user_id: 1,
    crypto_id: "bitcoin",
    broker_name: "XYZPeople"
  }
];

const mockTradeData = [
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

mockedAxios.get.mockResolvedValue(Promise.resolve({ data: mockTransationData }))

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
    patch: jest.fn(),
  };

  return {
    __esModule: true,
    default: instanceMock,
  };
});

jest.mock("../../services/details", () => ({
   getCoinById: jest.fn(),
  checkTransactions: jest.fn(),
}));

test("click on buy for Bitcoin", () => {
  const mockGetCoin = jest.fn().mockResolvedValue(mockTradeData);
  jest.spyOn(router, "useLocation").mockImplementation(() => {
    return {
      pathname: "/",
      search: "",
      hash: "",
      state: { coinName: "Bitcoin" },
      key: "",
    };
  });
  (getCoinById as jest.Mock).mockImplementation(mockGetCoin);
  render(
    <BrowserRouter>
      <DetailsPage />
    </BrowserRouter>
  );
  const buy = screen.getByText("BUY");
  fireEvent.click(buy);
  expect(navigate).toHaveBeenCalledTimes(1);
});

test("change the tabs", () => {
  jest.spyOn(router, "useLocation").mockImplementation(() => {
    return {
      pathname: "/",
      search: "",
      hash: "",
      state: null,
      key: "",
    };
  });
  render(
    <BrowserRouter>
      <DetailsPage />
    </BrowserRouter>
  );
  const wallet = screen.getByText("Wallet");
  fireEvent.click(wallet);
  const tabContent = screen.getByText("Total balance");
  expect(tabContent).toBeDefined();
});

test("click on sell for Ethereum", () => {
  jest.spyOn(router, "useLocation").mockImplementation(() => {
    return {
      pathname: "/",
      search: "",
      hash: "",
      state: { coinName: "Ethereum" },
      key: "",
    };
  });
  render(
    <BrowserRouter>
      <DetailsPage />
    </BrowserRouter>
  );

  const buy = screen.getByText("SELL");
  fireEvent.click(buy);
  expect(navigate).toHaveBeenCalledTimes(1);
});
