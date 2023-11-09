import React from "react";
import { render, waitFor } from "@testing-library/react";
import CryptoSelection from ".";

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
  };

  return {
    __esModule: true,
    default: instanceMock,
  };
});

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
}));
test("should renders without errors", () => {
  const element = render(
    <CryptoSelection
      selectedCoin={"bitcoin"}
      transaction_type="BUY"
      setUnitPrice={() => 1}
      setCoinName={() => "bitcoin"}
      setSymbol={() => "BTC"}
    />
  );
  expect(element.getByText("Buy Crypto")).toBeDefined();
});

test("should render without errors", async () => {
  const element = render(
    <CryptoSelection
      selectedCoin={"bitcoin"}
      transaction_type="BUY"
      setUnitPrice={() => 1}
      setSymbol={() => "BTC"}
      setCoinName={() => "bitcoin"}
    />
  );
  await waitFor(() => {
    expect(element.getByText("Bitcoin")).toBeDefined();
  });
});
test("should renders crypto cards with checked true", async () => {
  const element = render(
    <CryptoSelection
      selectedCoin={"bitcoin"}
      transaction_type="BUY"
      setUnitPrice={() => 1}
      setCoinName={() => "bitcoin"}
      setSymbol={() => "BTC"}
    />
  );

  await waitFor(() => {
    const imageELement = element.getAllByAltText("Bitcoin");
    expect(imageELement.length).toBe(2);
  });
});
