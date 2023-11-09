import { fireEvent, render } from "@testing-library/react";
import React from "react";
import LeftNavBar from ".";
import { BrowserRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const mockNavigater = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigater,
}));
jest.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    logout: jest.fn(),
  }),
}));

beforeEach(() => {
  mockNavigater.mockClear();
});

test("should render component", () => {
  const element = render(
    <BrowserRouter>
      <LeftNavBar />
    </BrowserRouter>
  );
  expect(element).toBeDefined();
});

test("should render component and navigates to dashboard", () => {
  const element = render(
    <BrowserRouter>
      <LeftNavBar />
    </BrowserRouter>
  );
  const dashboardIcon = element.getByTestId("icon-Dashboard");
  fireEvent.click(dashboardIcon);
  expect(mockNavigater).toHaveBeenCalledWith("/dashboard");
});
it("should call logout when Logout button is clicked", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <LeftNavBar />
    </BrowserRouter>
  );
  const logoutButton = getByTestId("icon-Logout");
  fireEvent.click(logoutButton);
  expect(useAuth0().logout).toBeDefined();
});

test("should render component and navigate no where", () => {
  const element = render(
    <BrowserRouter>
      <LeftNavBar />
    </BrowserRouter>
  );
  const logoutIcon = element.getByTestId("icon-Trade");
  fireEvent.click(logoutIcon);
  expect(mockNavigater).not.toHaveBeenCalled();
});
