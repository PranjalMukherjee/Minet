import React from "react";
import { render, screen } from "@testing-library/react";
import TradeCard from ".";
import Bitcoin from "../../../../public/images/bitcoin.svg";

// Mock the TradeCardProp data
const tradeCardProps = {
  cyptoDetail: {
    icon: "icon-url",
    heading: "Bitcoin",
    subHeading: "BTC",
  },
  change: "-1.23%",
  marketCap: "$1,000,000",
  price: "$1000",
  watchListed: true,
  onClick: jest.fn(),
};
const Props = {
  cyptoDetail: {
    icon: "icon-url",
    heading: "Bitcoin",
    subHeading: "BTC",
  },
  marketCap: "$1,000,000",
  price: "$1000",
  watchListed: true,
  onClick: jest.fn(),
};
test("should renders the TradeCard component correctly watchlisted as true", () => {
  render(<TradeCard {...tradeCardProps} />);
  expect(screen.getByText("Bitcoin")).toBeDefined();
  expect(screen.getByText("BTC")).toBeDefined();
});
test("should renders the TradeCard component correctly watchlisted as false", () => {
  render(<TradeCard {...Props} watchListed={false} />);
  expect(screen.getByText("Bitcoin")).toBeDefined();
  expect(screen.getByText("BTC")).toBeDefined();
});
test("should renders correctly with negative change value", () => {
  const cryptoDetail = {
    icon: Bitcoin,
    heading: "Bitcoin",
    subHeading: "BTC",
  };
  const change = "5.00";
  const marketCap = "100.00";
  const price = "50,000";
  const watchListed = true;
  const onClick = jest.fn();

  const { getByText } = render(
    <TradeCard
      cyptoDetail={cryptoDetail}
      change={change}
      marketCap={marketCap}
      price={price}
      watchListed={watchListed}
      onClick={onClick}
    />
  );
  const changeElement = getByText("+5.00%");
  expect(changeElement).toBeDefined();
  const HeadingElement = getByText("Bitcoin");
  expect(HeadingElement).toBeDefined();
  const SubHeadingElement = getByText("BTC");
  expect(SubHeadingElement).toBeDefined();
});
