import { fireEvent, render, screen } from "@testing-library/react"
import ForgetPassword from "."
import React from "react"
import "@testing-library/jest-dom/extend-expect";
import { FORGOT_TITLE, MAIL } from "../../../utils/constant"
import { BrowserRouter } from "react-router-dom";

test("enter email",() => {
    render(<BrowserRouter><ForgetPassword /></BrowserRouter>)
    const button = screen.getByText("Login")
    fireEvent.click(button)
})


test('Reset password', () => {
    render(<BrowserRouter><ForgetPassword /></BrowserRouter>);
    const title = screen.getByText(FORGOT_TITLE)
    expect(title).toBeDefined()
    const emailInput = screen.getByPlaceholderText(MAIL);
    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } });
    const button = screen.getByRole('button');
    expect(button).toBeEnabled()
    fireEvent.click(button);
  });
  