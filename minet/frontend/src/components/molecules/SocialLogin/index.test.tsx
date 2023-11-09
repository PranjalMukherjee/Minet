import React from 'react';
import { render } from '@testing-library/react';
import SocialLogin from '.';
import "@testing-library/jest-dom";
test('renders SocialLogin component', () => {
  const { getByTestId } = render(<SocialLogin />);
  const socialLoginComponent = getByTestId('social_login');
  expect(socialLoginComponent).toBeInTheDocument();
});
