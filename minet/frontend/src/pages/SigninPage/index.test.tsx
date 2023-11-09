import React from 'react';
import { render } from '@testing-library/react';
import SigninPage from './';
import { BrowserRouter } from 'react-router-dom';

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

describe('SigninPage Component', () => {
  it('renders Sign In component by default', () => {
    const { getByTestId } = render(<BrowserRouter><SigninPage component="signin" /></BrowserRouter>);
    const signInComponent = getByTestId('signin-component');
    expect(signInComponent).toBeDefined();
  });

  it('renders Forgot Password component when "forgotpassword" is passed as prop', () => {
    const { getByTestId } = render(<BrowserRouter><SigninPage component="forgotpassword" /></BrowserRouter>);
    const forgotPasswordComponent = getByTestId('forgotpassword-component');
    expect(forgotPasswordComponent).toBeDefined();
  });

  it('renders Reset Password component when "resetpassword" is passed as prop', () => {
    const { getByTestId } = render(<BrowserRouter><SigninPage component="resetpassword" /></BrowserRouter>);
    const resetPasswordComponent = getByTestId('resetpassword-component');
    expect(resetPasswordComponent).toBeDefined();
  });
  it('renders nothing the component is passed wroungly', () => {
    const { queryByTestId } = render(<BrowserRouter><SigninPage component="reset" /></BrowserRouter>);
    const resetPasswordComponent = queryByTestId('resetpassword-component');
    expect(resetPasswordComponent).toBe(null);
  });
});
