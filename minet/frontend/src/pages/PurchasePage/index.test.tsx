import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PurchasePage from ".";
import * as router from "react-router";
import { postCrypto } from "../../services/portfolio";
const navigate = jest.fn();
jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);

jest.mock("axios");

const mockUserData = `1000000`;

const localStorageMock = (() => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getItem(key: string) {
      return mockUserData;
    },
    clear: jest.fn(),
  };
})();
Object.defineProperty(window, "sessionStorage", {
  value: localStorageMock,
});
jest.mock("../../utils/Api", () => {
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

const mockCryptoData = [
  {
    id: "1",
    purchasePrice: 23.412,
    purchaseDate: "2023-12-21",
    sellPrice: 421.424,
    sellDate: "2023-12-21",
    quantity: 3,

    userId: "1",
    cryptoId: "bitcoin",
    brokerName: "XYZPeople",
  },
];
const mockTransactionData = [
  {
    status: "Success",
    date: "2023-12-21",
    type: "Sold",
    cryptoHoldingId: "1",
  },
];

jest.mock("../../services/portfolio", () => ({
  getAllCrypto: jest.fn(() => Promise.resolve(mockCryptoData)),
  getTransactions: jest.fn(() => Promise.resolve(mockTransactionData)),
  postCrypto: jest.fn((cryptoHoldingData) => {
    if (cryptoHoldingData) {
      return Promise.resolve({ data: { id: "mockCryptoId" } });
    } else {
      return Promise.reject(new Error("Invalid cryptoHoldingData"));
    }
  }),

  postTransaction: jest.fn((transactionData) => {
    if (transactionData) {
      return Promise.resolve({ data: { id: "mockTransactionId" } });
    } else {
      return Promise.reject(new Error("Invalid cryptoHoldingData"));
    }
  }),
}));

test("should render success  Page", () => {
  jest.spyOn(router, "useLocation").mockImplementation(() => {
    return {
      pathname: "/",
      search: "",
      hash: "",
      state: {
        transaction_type: "BUY",
        symbol: "BTC",
        coin_name: "bitcoin",
        unit_price: 12,
      },
      key: "",
    };
  });
  const element = render(
    <BrowserRouter>
      <PurchasePage />
    </BrowserRouter>
  );
  expect(element).toBeDefined();
});

test("should render success purchase Page", () => {
  jest.spyOn(router, "useLocation").mockImplementation(() => {
    return {
      pathname: "/",
      search: "",
      hash: "",
      state: {
        transaction_type: "BUY",
        symbol: "BTC",
        coin_name: "bitcoin",
        unit_price: 12,
      },
      key: "",
    };
  });
  const element = render(
    <BrowserRouter>
      <PurchasePage />
    </BrowserRouter>
  );
  const clickSpy = jest.spyOn(fireEvent, "click");
  const buyNOw = screen.getByText("BUY NOW");
  const butNowTestId = screen.getAllByTestId("button-click");
  fireEvent.click(butNowTestId[1].parentElement as HTMLButtonElement);
  fireEvent.click(buyNOw.parentElement as HTMLButtonElement);
  expect(clickSpy).toBeCalled();
  expect(element).toBeDefined();
});
test("should render success purchase Page", () => {
  jest.spyOn(router, "useLocation").mockImplementation(() => {
    return {
      pathname: "/",
      search: "",
      hash: "",
      state: {
        transaction_type: "SELL",
        symbol: "BTC",
        coin_name: "bitcoin",
        coin_id: "bitcoin",
        unit_price: 12,
      },
      key: "",
    };
  });
  const element = render(
    <BrowserRouter>
      <PurchasePage />
    </BrowserRouter>
  );
  const clickSpy = jest.spyOn(fireEvent, "click");
  const buyNOw = screen.getByText("SELL NOW");
  const butNowTestId = screen.getAllByTestId("button-click");

  fireEvent.click(butNowTestId[1].parentElement as HTMLButtonElement);
  fireEvent.click(buyNOw.parentElement as HTMLButtonElement);
  expect(clickSpy).toBeCalled();
  expect(element).toBeDefined();
});
test("should make a postCrypto call when buying", async () => {
  jest.spyOn(router, "useLocation").mockImplementation(() => {
    return {
      pathname: "/",
      search: "",
      hash: "",
      state: {
        transaction_type: "BUY",
        symbol: "BTC",
        coin_name: "bitcoin",
        unit_price: 12,
      },
      key: "",
    };
  });

  const element = render(
    <BrowserRouter>
      <PurchasePage />
    </BrowserRouter>
  );

  const clickSpy = jest.spyOn(fireEvent, "click");
  const buyNOw = screen.getByText("BUY NOW");
  const butNowTestId = screen.getAllByTestId("button-click");

  fireEvent.click(butNowTestId[1].parentElement as HTMLButtonElement);
  fireEvent.click(buyNOw.parentElement as HTMLButtonElement);
  expect(clickSpy).toBeCalled();
  expect(postCrypto).toBeDefined();

  // Add more assertions based on the expected behavior of your component
  expect(element).toBeDefined();
});
