import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import PaymentPage from ".";
import * as router from "react-router";

describe("render page", () => {
  const navigate = jest.fn();
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  test("click on go to usdCoin when Sell coin", () => {
    jest.spyOn(router, "useLocation").mockImplementation(() => {
      return {
        pathname: "/",
        search: "",
        hash: "",
        state: { amount: "12345", status: "SELL", acronym: "BTC" },
        key: "",
      };
    });
    render(
      <BrowserRouter>
        <PaymentPage />
      </BrowserRouter>
    );
    const button = screen.getByText("GO TO USD COIN");
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledTimes(1);
  });
  test("click on go to usdCoin when Buy coin", () => {
    jest.spyOn(router, "useLocation").mockImplementation(() => {
      return {
        pathname: "/",
        search: "",
        hash: "",
        state: { amount: "12345", status: "BUY", acronym: "BTC" },
        key: "",
      };
    });
    render(
      <BrowserRouter>
        <PaymentPage />
      </BrowserRouter>
    );
    const button = screen.getByText("GO TO USD COIN");
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledTimes(1);
  });
});
