import { render, screen } from "@testing-library/react";
import Details from ".";
import React from "react";
import { RESOURCES_LIST, CORRELATION, CONTENT } from "../../../utils/constant";
import Banner from "../../molecules/Banner";
import { BrowserRouter } from "react-router-dom";
import LeftNavBar from "../../organisms/LeftNavBar";

describe("Details template", () => {
  const handleBuy = jest.fn();
  const handleSell = jest.fn();
  const body1 = (
    <Banner
      name="Bitcoin"
      resources={RESOURCES_LIST}
      items={CORRELATION}
      description={CONTENT}
    />
  );
  const body2 = <LeftNavBar />;
  test("render component with header buttons and the footer", () => {
    render(
      <BrowserRouter>
        <Details
          title="Trade"
          buttons={true}
          handleBuy={handleBuy}
          handleSell={handleSell}
          body1={body1}
          body2={body2}
        />
      </BrowserRouter>
    );
    const button = screen.getByRole("button", { name: "SELL" });
    expect(button).toBeDefined;
    const footer = screen.getByTestId("test_footer");
    expect(footer).toBeDefined;
  });
  test("render component without header buttons", () => {
    render(
      <BrowserRouter>
        <Details
          title="Trade"
          buttons={false}
          handleBuy={handleBuy}
          handleSell={handleSell}
          body1={body1}
        />
      </BrowserRouter>
    );
    const button = screen.queryByRole("button", { name: "SELL" });
    expect(button).toBeNull();
  });
});
