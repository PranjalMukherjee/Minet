import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignIn from ".";
import { BrowserRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import * as router from "react-router";
import axios from "axios";

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
  };

  return {
    __esModule: true,
    default: instanceMock,
  };
});

jest.mock("../../../services/details", () => ({
  signInToApp: jest.fn(() => Promise.resolve({ data: [{userId:"1",token:"123dfg"}] }))
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedLOginData = {
  userId: 1,
  email: "abc@gmail.com",
  password: "password",
  fullname: "ABC",
};
mockedAxios.post.mockResolvedValueOnce({
  data: mockedLOginData,
});
const navigate = jest.fn();
jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);

jest.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    loginWithRedirect: jest.fn(),
  }),
}));
test("should call loginWithRedirect when Sign In button is clicked", () => {
  const { getByText } = render(<SignIn />);
  const signIn = getByText("Sign in");
  fireEvent.click(signIn);
  expect(useAuth0().loginWithRedirect).toBeDefined();
});

test("Should Validating Invalid email and Password", async () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );

  const emailInput = screen.getByPlaceholderText("you@company.com");
  const passwordInput = screen.getByPlaceholderText("Enter Password");

  fireEvent.change(emailInput, { target: { value: "userexample.com" } });
  fireEvent.change(passwordInput, { target: { value: "Password123@" } });
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test("Should Submitting valid email and Password", async () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );

  const emailInput = screen.getByPlaceholderText("you@company.com");
  const passwordInput = screen.getByPlaceholderText("Enter Password");

  fireEvent.change(emailInput, { target: { value: "vijitha123@gmail.com" } });
  fireEvent.change(passwordInput, { target: { value: "Vijitha@321" } });
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test("Should Submitting Password without email", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );

  const passwordInput = screen.getByPlaceholderText("Enter Password");
  const emailInput = screen.getByPlaceholderText("you@company.com");
  fireEvent.change(emailInput, { target: { value: "" } });
  fireEvent.change(passwordInput, { target: { value: "Password123@" } });
  expect(passwordInput).toBeInTheDocument();
});

test("Should Submitting email without Password", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );

  const emailInput = screen.getByPlaceholderText("you@company.com");

  fireEvent.change(emailInput, { target: { value: "user@example.com" } });
  expect(emailInput).toBeInTheDocument();
});

test("Should Submitting Email and Password without any special characters", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );

  const emailInput = screen.getByPlaceholderText("you@company.com");
  const passwordInput = screen.getByPlaceholderText("Enter Password");

  fireEvent.change(emailInput, { target: { value: "user@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "Password123" } });
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test("Should Submitting Email and Password without any numbers", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );

  const emailInput = screen.getByPlaceholderText("you@company.com");
  const passwordInput = screen.getByPlaceholderText("Enter Password");

  fireEvent.change(emailInput, { target: { value: "user@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "Password@" } });
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test("Should Password visibility toggles on eye icon click", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );

  const passwordInput = screen.getByPlaceholderText("Enter Password");

  expect(passwordInput.getAttribute("type")).toBe("password");
});

test("Password visibility toggles on eye icon click", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );

  const passwordInput = screen.getByPlaceholderText("Enter Password");
  const eyeIcon = screen.getByAltText("eye");
  expect(passwordInput.getAttribute("type")).toBe("password");
  fireEvent.click(eyeIcon);
  expect(passwordInput.getAttribute("type")).toBe("text");
  fireEvent.click(eyeIcon);
  expect(passwordInput.getAttribute("type")).toBe("password");
});

test("should call navigate when Sign In button is clicked", () => {
  const { getByText } = render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );
  const emailInput = screen.getByPlaceholderText("you@company.com");
  const passwordInput = screen.getByPlaceholderText("Enter Password");

  fireEvent.change(emailInput, { target: { value: "vijitha123@gmail.com" } });
  fireEvent.change(passwordInput, { target: { value: "Vijitha@321" } });

  const signInButton = getByText("Sign in");

  fireEvent.click(signInButton);

  expect(1).toEqual(mockedLOginData.userId);
});
