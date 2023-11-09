import React from "react";
import PaymentMethod from "../../molecules/PaymentMethod";
import SpeedDeliveryCard from "../../molecules/SpeedDeliveryCard";
import AmountDetail from "../../organisms/AmountDetail";
import CryptoSelection from "../../organisms/CryptoSelection";
import LeftNavBar from "../../organisms/LeftNavBar";
import { render, screen, waitFor } from "@testing-library/react";
import TransactionCard from "../../organisms/TransactionCard";
import Checkout from ".";
import { BrowserRouter } from "react-router-dom";

const handleBuy = jest.fn();
const handleSell = jest.fn();

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
jest.mock("axios");

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
jest.mock("../../../services/watchlist", () => ({
  getCoins: jest.fn(() => Promise.resolve(mockTradeData)),
}));

const body1 = (
  <>
    <CryptoSelection
      selectedCoin={"bitcoin"}
      transaction_type="BUY"
      setUnitPrice={() => 1}
      setSymbol={() => "BTC"}
      setCoinName={() => "bitcoin"}
    />
    <PaymentMethod cost={"1000"} />
    <AmountDetail
      cryptoPrice={1000}
      cryptoQuantity={1}
      cryptoAction={"Buy Max"}
      symbol={"BTC"}
      setQuantity={() => {
        10;
      }}
      maximumValue={0}
    />
    <SpeedDeliveryCard />
  </>
);

const body2 = <LeftNavBar />;
test("render component with header title and the footer", () => {
  render(
    <BrowserRouter>
      <Checkout
        title="Trade"
        buttons={false}
        handleBuy={handleBuy}
        handleSell={handleSell}
        body1={body1}
        body2={body2}
      />
    </BrowserRouter>
  );
  const title = screen.getByText("Trade");
  expect(title).toBeDefined;
  const footer = screen.getByTestId("test_footer");
  expect(footer).toBeDefined;
});

test("render component with bitcoin as tick card and the footer", async () => {
  const body2 = (
    <>
      <TransactionCard
        headerStatement={"You are buying"}
        amount={"0.5234510 ETH"}
        unit={"1ETH = $1,297.93"}
        handleTransaction={() => console.log("hi")}
        paymentSource={"Visa credit ...8845"}
        deliveryFees={"0.005 ETH"}
        deposit={"Etherium wallet"}
        totalCurrencyAmount={"$648.54"}
        totalAmount={"0.0234510 ETH"}
        buttonLabel={"BUY NOW"}
        totalCurrencyQuantity={""}
      />
    </>
  );
  render(
    <BrowserRouter>
      <Checkout
        title="Trade"
        buttons={false}
        handleBuy={handleBuy}
        handleSell={handleSell}
        body1={body1}
        body2={body2}
      />
    </BrowserRouter>
  );

  await waitFor(() => {
    const imageELement = screen.getAllByAltText("Bitcoin");
    expect(imageELement.length).toBe(2);
    const footer = screen.getByTestId("test_footer");
    expect(footer).toBeDefined;
  });
});
