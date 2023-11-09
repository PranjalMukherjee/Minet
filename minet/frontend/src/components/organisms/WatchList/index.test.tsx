import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import WatchList from ".";
import {
  DISCOVERY_ASSERTS,
  VIEW_WATCHLIST,
} from "../../../../src/utils/constant";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import * as router from "react-router";
import { getCoins, getWatchlistByUser } from "../../../services/watchlist";

const coin = [
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
    circulating_supply: 19490343.0,
    total_supply: 21000000.0,
  },
];

const singleWatchlist = [
  {
    coinId:"bitcoin",
    id:"id1",
    userId:"1",
    watchlist:true
  }
]

const doubleWatchlist = [
  {
    coinId:"bitcoin",
    id:"id1",
    userId:"1",
    watchlist:true
  },
  {
    coinId:"ethereum",
    id:"id1",
    userId:"1",
    watchlist:true
  }
]

const coins = [
  {
    id: "ethereum",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 27277,
    market_cap: 532446077882,
    total_volume: 14152139654,
    price_change_percentage_24h: 0.06372,
    circulating_supply: 19490343.0,
    total_supply: 21000000.0,
  },
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
    circulating_supply: 19490343.0,
    total_supply: 21000000.0,
  },
];

jest.mock("../../../services/watchlist", () => ({
  getCoins: jest.fn(),
  getWatchlistByUser: jest.fn(),
}));

jest.mock("@nivo/line", () => ({
  ResponsiveLine: () => <div data-testid="mocked-responsive-line" />,
}));

const navigate = jest.fn();
jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);

jest.mock("axios");

describe("WatchList component", () => {
  beforeEach(() => {
    const mockGetCoins = jest.fn().mockResolvedValue(coin);
    const mockGetWatchlistByUser = jest.fn().mockResolvedValue(singleWatchlist);

  (getCoins as jest.Mock).mockImplementation(mockGetCoins);
  (getWatchlistByUser as jest.Mock).mockImplementation(mockGetWatchlistByUser);
    render(
      <BrowserRouter>
        <WatchList />
      </BrowserRouter>
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
    const mockGetCoins = jest.fn().mockResolvedValue(coins);
    (getCoins as jest.Mock).mockImplementation(mockGetCoins);
    const mockGetWatchlistByUser = jest.fn().mockResolvedValue(doubleWatchlist);
    (getWatchlistByUser as jest.Mock).mockImplementation(mockGetWatchlistByUser);
  })

  test("check the length of the watch list odd", async () => {
    await waitFor(() => {
      const gridCellElements = screen.getAllByRole("gridcell");
      expect(gridCellElements).toHaveLength(coin.length);
    });
  });

  test("click on Dicovery asserts", () => {
    fireEvent.click(
      screen.getByText(DISCOVERY_ASSERTS).parentElement as HTMLElement
    );
    expect(navigate).toHaveBeenCalledWith("/trade", {
      state: { selectedTab: 0 },
    });
  });

  test("click on View Watchlist", () => {
    fireEvent.click(
      screen.getByText(VIEW_WATCHLIST).parentElement as HTMLElement
    );
    expect(navigate).toHaveBeenCalledWith("/trade", {
      state: { selectedTab: 1 },
    });
  });

  test("click on particular coin to navigate", async () => {
    await waitFor(() => {
      const coin = screen.getByText("Bitcoin");
      fireEvent.click(coin)
    })
    expect(navigate).toHaveBeenCalledWith("/trade", {
      state: { selectedTab: 0 },
    });
  });
});
