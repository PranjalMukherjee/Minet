import { render, screen } from "@testing-library/react";
import PortfolioGraph from ".";
import React from "react";
import { cryptoData, singleCryptoData } from "../../../utils/constant";
jest.mock("@nivo/line", () => ({
  ResponsiveLine: () => <div data-testid="mocked-responsive-line" />,
}));
describe("render component", () => {
  test("render single graph", () => {
    render(
      <PortfolioGraph
        legends={false}
        coinCost="123.345"
        coinPercent="1.2"
        graphData={singleCryptoData}
      />
    );
    const coinCost = screen.getByText("$123.345");
    expect(coinCost).toBeDefined;
  });
  test("render double graph", () => {
    render(
      <PortfolioGraph
        legends={true}
        totalCost="123"
        totalPercent="-3.2"
        coinName="Bitcoin"
        coinCost="123.345"
        coinPercent="-1.2"
        graphData={cryptoData}
      />
    );
    const totalCost = screen.getByText("$123");
    expect(totalCost).toBeDefined;
  });
  test("render double graph", () => {
    render(
      <PortfolioGraph
        legends={true}
        totalCost="123"
        totalPercent="3.2"
        coinName="Bitcoin"
        coinCost="123.345"
        coinPercent="-1.2"
        graphData={cryptoData}
      />
    );
    const totalCost = screen.getByText("$123");
    expect(totalCost).toBeDefined;
  });
  test("render double graph", () => {
    render(
      <PortfolioGraph
        legends={true}
        totalCost="123"
        coinName="Bitcoin"
        coinCost="123.345"
        coinPercent="-1.2"
        graphData={cryptoData}
      />
    );
    const totalCost = screen.getByText("$123");
    expect(totalCost).toBeDefined;
  });
});
