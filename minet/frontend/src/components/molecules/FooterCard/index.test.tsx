import React from 'react';
import { render } from '@testing-library/react';
import Footer from '.';
import "@testing-library/jest-dom";
test('renders Footer component', () => {
  const { getByTestId } = render(<Footer />);
  const FooterComponent = getByTestId('test_footer');
  expect(FooterComponent).toBeInTheDocument();
});