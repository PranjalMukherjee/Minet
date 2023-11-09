import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PortfolioCard from ".";
import BitcoinImage from "../../../../public/images/bitcoin.svg";

describe("PortfolioCard", () => {
  test("should render a test maximume width and height", () => {
    const iconSrc = BitcoinImage;
    const coinName = "Bitcoin";
    const sortName = "BTC";
    const valueInDoller = "4.3";
    const growthPercent = "+1.1";

    const { getByTestId } = render(
      <PortfolioCard
        imageSrc={iconSrc}
        coinName={coinName}
        sortName={sortName}
        valueInDollar={valueInDoller}
        growthPercent={growthPercent}
        isPriceCorrelation={true}
      />
    );

    const boxElement = getByTestId("portfolio-box");
    expect(boxElement).toBeInTheDocument();
  });

  test("should render a test negative growth", () => {
    const iconSrc = BitcoinImage;
    const coinName = "Bitcoin";
    const sortName = "BTC";
    const valueInDoller = "4.3";
    const growthPercent = "-1.1";

    const { getByTestId } = render(
      <PortfolioCard
        imageSrc={iconSrc}
        coinName={coinName}
        sortName={sortName}
        valueInDollar={valueInDoller}
        growthPercent={growthPercent}
        isPriceCorrelation = { false}
      />
    );

    const boxElement = getByTestId("portfolio-box");
    expect(boxElement).toBeInTheDocument();
  });

  test("should render a test negative growth", () => {
    const iconSrc = BitcoinImage;
    const coinName = "Bitcoin";
    const sortName = "BTC";
    const valueInDoller = "4.3";
    const growthPercent = "+1.1";

    const { getByTestId } = render(
      <PortfolioCard
        imageSrc={iconSrc}
        coinName={coinName}
        sortName={sortName}
        valueInDollar={valueInDoller}
        growthPercent={growthPercent}
        isPriceCorrelation = { false}
      />
    );

    const boxElement = getByTestId("portfolio-box");
    expect(boxElement).toBeInTheDocument();
  });
});
