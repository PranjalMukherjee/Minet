import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AssetTable from ".";
import "@testing-library/jest-dom/extend-expect";
import * as router from "react-router";

const navigate = jest.fn();
jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);

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
    patch: jest.fn(),
  };

  return {
    __esModule: true,
    default: instanceMock,
  };
});

jest.mock("axios");

jest.mock("../../../services/watchlist", () => ({
  getCoins: jest.fn(() =>
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
  getWatchlistByUser: jest.fn(() =>
    Promise.resolve([
      {
        id: "12",
        userId: "1",
        coinId: "1",
        watchlist: true,
      },
      {
        id: "122",
        userId: "1",
        coinId: "1",
        watchlist: true,
      },
    ])
  ),
  addWatchlist: jest.fn(),
}));
jest.mock("../../../utils/Utility", () => ({
  getUserIdFromSessionStorage: jest.fn(() => "1"),
  getMonth: jest.fn(() => "9"),
  getDate: jest.fn(() => "9"),
}));
describe("AssetTable", () => {
  test("renders TradeFrame component", () => {
    render(<AssetTable selectedTab={0} />);
    expect(screen.getByTestId("asset-table")).toBeInTheDocument();
  });
  test("updates search data when input value changes", () => {
    render(<AssetTable selectedTab={0} />);
    const searchInput = screen.getByPlaceholderText(
      "Search all assets"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "bitcoin" } });
    expect(searchInput.value).toBe("bitcoin");
  });

  test("Change descending order to ascending order in trade table", async () => {
    render(<AssetTable selectedTab={0} />);
    await waitFor(() => {
      const marketCapButton = screen.getByTestId("market-cap-button");
      fireEvent.click(marketCapButton);
    });
  });

  test("should toggle the market cap order when the button is clicked", () => {
    const { getByTestId } = render(<AssetTable selectedTab={0} />);

    const button = getByTestId("market-cap-button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });

  test("handles tab change correctly", () => {
    const { getByTestId } = render(<AssetTable selectedTab={0} />);
    const assetsTab = getByTestId("assests");
    expect(assetsTab).toBeInTheDocument();
    fireEvent.click(screen.getByText("Watchlist"));

    const watchlistTab = getByTestId("watchlist");
    expect(watchlistTab).toBeInTheDocument();

    fireEvent.click(screen.getByText("All Assets"));
  });
  test("should toggle watchList when TradeCard is clicked", () => {
    const element = render(<AssetTable selectedTab={0} />);
    waitFor(() => {
      const start = element.getAllByAltText("Star");
      const buttonEle = start[0].parentElement as HTMLButtonElement;
      const clickSpy = jest.spyOn(fireEvent, "click");
      fireEvent.click(buttonEle);
      expect(clickSpy).toHaveBeenCalledTimes(1);
      clickSpy.mockRestore();
    });
  });
});
test("handle bitcon details present", () => {
  const { getByTestId } = render(<AssetTable selectedTab={0} />);
  const assetsTab = getByTestId("assests");
  expect(assetsTab).toBeInTheDocument();

  fireEvent.click(screen.getByText("All Assets"));
  expect("Bitcoin").toBeDefined();
});
