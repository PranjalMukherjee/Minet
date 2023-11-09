import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { ENTER_PASSWORD, RESET_SUCCESS } from "../../../utils/constant";
import ResetPassword from ".";
import { BrowserRouter } from "react-router-dom";

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
    patch: jest.fn(),
  };

  return {
    __esModule: true,
    default: instanceMock,
  };
});

jest.mock("../../../services/resetPassword", () => ({
  resetPassword: jest.fn(() => Promise.resolve({ data: ["success"] }))
}));

describe("ResetPassword Component", () => {
  let button:HTMLElement;
  let passwordInputs:HTMLElement[];

  beforeEach(() => {
    render(<BrowserRouter><ResetPassword /></BrowserRouter>);
    button = screen.getByRole("button");
    passwordInputs = screen.getAllByPlaceholderText(ENTER_PASSWORD);
    fireEvent.change(passwordInputs[0], { target: { value: "Chathur@2000" } });
    fireEvent.change(passwordInputs[1], { target: { value: "Chathur@2000" } });
  });

  test("Component when reset is true", () => {  
    const eyeIcons = screen.getAllByAltText("eye");
    fireEvent.click(eyeIcons[0]);
    fireEvent.click(eyeIcons[1]);
    expect(passwordInputs[0]).toHaveAttribute("type", "text");
    expect(passwordInputs[1]).toHaveAttribute("type", "text");
  });

  test("Component when reset is false", async () => {
    fireEvent.click(button);
    await waitFor(() => {
      const success = screen.getByText(RESET_SUCCESS);
      expect(success).toBeDefined();
    });
    fireEvent.click(button);
  });
});
