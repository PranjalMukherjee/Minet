import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; 
import SignupPage from "."; 
import { BrowserRouter } from "react-router-dom";

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
    };
  
    return {
      __esModule: true,
      default: instanceMock,
    };
  });

test("Should render SigninPage  components", () => { 
    
    render(<BrowserRouter><SignupPage /></BrowserRouter>);

});
