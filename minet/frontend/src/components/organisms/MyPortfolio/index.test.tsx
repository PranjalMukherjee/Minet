import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import MyPortfolio from ".";

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

describe("MyPortfolio Component", () => {
  beforeEach(async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: [
        {
          id: 1,
          name: "Bitcoin",
          image: "bitcoin.png",
          symbol: "BTC",
          current_price: 50000,
          price_change_percentage_24h: 5.0,
        },
        {
          id: 2,
          name: "Ethereum",
          image: "ethereum.png",
          symbol: "ETH",
          current_price: 3000,
          price_change_percentage_24h: 3.0,
        },
      ],
    });

    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: [
        {
          user_id: 1,
          total_balance: 10000,
        },
      ],
    });

    await act(async () => {
      render(<MyPortfolio />);
    });
  });

  it("renders My Portfolio title", async () => {
    const portfolioTitle = screen.getByText("My Portfolio");
    expect(portfolioTitle).toBeInTheDocument();
  });

  it("fetches and renders portfolio data successfully", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: [
        {
          id: 1,
          name: "Bitcoin",
          image: "bitcoin.png",
          symbol: "BTC",
          current_price: 50000,
          price_change_percentage_24h: 5.0,
        },
        {
          id: 2,
          name: "Ethereum",
          image: "ethereum.png",
          symbol: "ETH",
          current_price: 3000,
          price_change_percentage_24h: 3.0,
        },
      ],
    });
    render(<MyPortfolio />);
    const loadingSpinner = screen.queryByText("Loading...");
    expect(loadingSpinner).not.toBeInTheDocument();
  });
});
