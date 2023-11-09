import { fireEvent, render, screen } from "@testing-library/react";
import Header from ".";
import React from "react";
import { BUY, SELL } from "../../../utils/constant";
import { BrowserRouter } from "react-router-dom";

jest.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    logout: jest.fn(),
  }),
}));

describe("Header component", () => {
  const handleBuy = jest.fn();
  const handleSell = jest.fn();
  test("click on sell button", () => {
    render(
      <BrowserRouter>
        <Header title="Trade" handleBuy={handleBuy} handleSell={handleSell} buttons={true} />
      </BrowserRouter>
    );
    const sell = screen.getByRole("button", { name: SELL });
    fireEvent.click(sell);
    expect(handleSell).toHaveBeenCalled();
  });
  test("click on buy button", () => {
    render(
      <BrowserRouter>
        <Header title="Trade" handleBuy={handleBuy} handleSell={handleSell} buttons={true} />
      </BrowserRouter>
    );
    const buy = screen.getByRole("button", { name: BUY });
    fireEvent.click(buy);
    expect(handleBuy).toHaveBeenCalled();
  });
  test("render Header without buttons", () => {
    render(
      <BrowserRouter>
        <Header title="Trade" handleBuy={handleBuy} handleSell={handleSell} buttons={false} />
      </BrowserRouter>
    );
    const buyButton = screen.queryByRole('button', { name: 'BUY' });
  const sellButton = screen.queryByRole('button', { name: 'SELL' });

  expect(buyButton).toBeNull();
  expect(sellButton).toBeNull();
  });
  test("click on logout", () => {
    render(
      <BrowserRouter>
        <Header title="Trade" handleBuy={handleBuy} handleSell={handleSell} buttons={false} />
      </BrowserRouter>
    );
    const logout = screen.getByAltText('Avator').parentElement as HTMLElement;
    fireEvent.click(logout);
  });
});
