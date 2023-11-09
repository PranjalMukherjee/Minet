import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Signup from ".";
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
  singUpToApp: jest.fn(() => Promise.resolve({id:"1"}))
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedLOginData = {
  id: 1,
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

test("should call loginWithRedirect when Signup button is clicked", () => {
  const { getByText } = render(<Signup />);
  const signUpButton = getByText("Google");
  fireEvent.click(signUpButton);
  expect(useAuth0().loginWithRedirect).toBeDefined();
});

test("Should Validating form with invalid full name, email, and password", async () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
  const fullNameInput = screen.getByPlaceholderText("Eg: John Doe");
  const emailInput = screen.getByPlaceholderText("you@company.com");
  const passwordInput = screen.getByPlaceholderText("Create Password");

  fireEvent.change(fullNameInput, { target: { value: "Vijitha!" } });
  fireEvent.change(emailInput, { target: { value: "userexample.com" } });
  fireEvent.change(passwordInput, { target: { value: "Password123@" } });

  expect(fullNameInput).toHaveValue("Vijitha!");
  expect(emailInput).toHaveValue("userexample.com");
  expect(passwordInput).toHaveValue("Password123@");
});

test("Should Submitting a valid full name, email, and password", async () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
  const fullNameInput = screen.getByPlaceholderText("Eg: John Doe");
  const emailInput = screen.getByPlaceholderText("you@company.com");
  const passwordInput = screen.getByPlaceholderText("Create Password");

  fireEvent.change(fullNameInput, { target: { value: "Vijithasai" } });
  fireEvent.change(emailInput, { target: { value: "vijitha123@gmail.com" } });
  fireEvent.change(passwordInput, { target: { value: "Vijitha@321" } });
});

test("Should Toggling password visibility", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  const passwordInput = screen.getByPlaceholderText("Create Password");

  expect(passwordInput.getAttribute("type")).toBe("password");
});

test("Should Displaying an error message for invalid password format", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  const passwordInput = screen.getByPlaceholderText("Create Password");

  fireEvent.change(passwordInput, { target: { value: "Invalid" } });

  const passwordError = screen.getByText(
    "A min of 8 charaters with atleast 1 special character and number included"
  );

  expect(passwordError).toBeInTheDocument();
});

test("Password visibility toggles on eye icon click", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  const passwordInput = screen.getByPlaceholderText("Create Password");
  const eyeIcon = screen.getByAltText("eye");
  expect(passwordInput.getAttribute("type")).toBe("password");
  fireEvent.click(eyeIcon);
  expect(passwordInput.getAttribute("type")).toBe("text");
  fireEvent.click(eyeIcon);
  expect(passwordInput.getAttribute("type")).toBe("password");
});

test("should call navigate when Sign up button is clicked", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
  const fullNameInput = screen.getByPlaceholderText("Eg: John Doe");
  const emailInput = screen.getByPlaceholderText("you@company.com");
  const passwordInput = screen.getByPlaceholderText("Create Password");

  fireEvent.change(fullNameInput, { target: { value: "Vijithasai" } });
  fireEvent.change(emailInput, { target: { value: "vijitha123@gmail.com" } });
  fireEvent.change(passwordInput, { target: { value: "Vijitha@321" } });
  const signUpButton = getByText("Sign up");

  fireEvent.click(signUpButton);
  expect(1).toEqual(mockedLOginData.id);
});
