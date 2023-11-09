import { act, fireEvent, render } from "@testing-library/react";
import SubHeader from ".";
import React from "react";
import Bitcoin from "../../../../public/images/bitcoin.svg";
import ButtonAtom from "../../atoms/Button";
import axios from "axios";

jest.mock("axios");

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

jest.mock("../../../services/watchlist", () => ({
  addWatchlist: jest.fn(() => Promise.resolve({ data: [{
    userId: "1",
    coinId: "bitcoin",
    watchlist: true,
  }] })),
  // getCoins: jest.fn(() => Promise.resolve(mockTradeData)),
  // getWatchlistByUser: jest.fn(() => Promise.resolve(mockWatchlistData)),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockTradeData = {
  data: [
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
  ],
};
test("should render component", () => {
  const element = render(
    <SubHeader
      id="bitcoin"
      icon={Bitcoin}
      symbol={"BTC"}
      cryptoName={"Bitcoin"}
      marketCap={100}
      volume={10}
      circulatingSupply={0.89}
      growthRate={-0.97}
      isPriceCorrelation={false}
    />
  );
  expect(element).toBeDefined();
});
test("should render component with add to watchlist clicked", () => {
  mockedAxios.get.mockResolvedValue(Promise.resolve(mockTradeData));
  // mockedAxios.post.mockResolvedValue(
  //   Promise.resolve({
  //     userId: "1",
  //     coinId: "bitcoin",
  //     watchlist: true,
  //   })
  // );
  render(
    <SubHeader
      id="bitcoin"
      icon={Bitcoin}
      symbol={"BTC"}
      cryptoName={"Bitcoin"}
      marketCap={100}
      volume={10}
      circulatingSupply={0.89}
      growthRate={0.97}
      isPriceCorrelation={false}
      watchlisted={false}
    />
  );
  const buttonEle = render(<ButtonAtom onClick={jest.fn()} />);

  const addToWatchlist = buttonEle.getByText("ADD TO WATCHLIST");
  expect(addToWatchlist).toBeDefined();

  const clickSpy = jest.spyOn(fireEvent, "click");
  act(() => {
    fireEvent.click(addToWatchlist);
  });
  expect(clickSpy).toHaveBeenCalledTimes(1);
  clickSpy.mockRestore();
});
test("should render component with added to watchlist clicked", () => {
  mockedAxios.get.mockResolvedValue(Promise.resolve(mockTradeData));

  render(
    <SubHeader
      id="bitcoin"
      icon={Bitcoin}
      symbol={"BTC"}
      cryptoName={"Bitcoin"}
      marketCap={100}
      volume={10}
      circulatingSupply={0.89}
      growthRate={0.97}
      isPriceCorrelation={false}
      watchlisted={true}
    />
  );
  const buttonEle = render(<ButtonAtom onClick={jest.fn()} />);

  const addToWatchlist = buttonEle.getByText("ADDED TO WATCHLIST");
  expect(addToWatchlist).toBeDefined();

  const clickSpy = jest.spyOn(fireEvent, "click");
  act(() => {
    fireEvent.click(addToWatchlist);
  });
  expect(clickSpy).toHaveBeenCalledTimes(1);
  clickSpy.mockRestore();
});
