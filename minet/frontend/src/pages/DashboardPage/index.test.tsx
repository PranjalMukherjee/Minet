import React from "react";
import { fireEvent,render, screen, waitFor } from "@testing-library/react";
import DashboardPage from ".";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import EmptyGraph from "./emptyGraph";
import axios from "axios";
import "../../utils/Api";
import LeftBody from "./body1";

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
jest.mock("@nivo/line", () => ({
  ResponsiveLine: () => <div data-testid="mocked-responsive-line" />,
}));

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockTradeData = {
  data: [
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
  ],
};

mockedAxios.get.mockResolvedValue(Promise.resolve(mockTradeData));

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
test("renders DashboardPage component", async () => {
  const { queryByTestId } = render(
    <BrowserRouter>
      <DashboardPage />
    </BrowserRouter>
  );

  await waitFor(() => {
    const leftDashboardComponent = queryByTestId("left-body");
    const rightDashboardComponent = queryByTestId("right-body");
    expect(leftDashboardComponent).toBeInTheDocument();
    expect(rightDashboardComponent).toBeInTheDocument();
  });
});
test("renders Empty graph component", () => {
  const { queryByTestId } = render(
    <BrowserRouter>
      <EmptyGraph />
    </BrowserRouter>
  );

  const emptyGraph = queryByTestId("test-graph");
  expect(emptyGraph).toBeInTheDocument();
});
const mockProps = {
  totalInvestment: 1000,
};

test("renders LeftBody component with conditional rendering", async () => {
  render(
    <BrowserRouter>
      <LeftBody {...mockProps} />
    </BrowserRouter>
  );

  const eth = screen.getByText("Ethereum");
  fireEvent.click(eth);
  expect(eth).toBeInTheDocument();
  const bit = screen.getByText("Bitcoin");
  fireEvent.click(bit);
});

