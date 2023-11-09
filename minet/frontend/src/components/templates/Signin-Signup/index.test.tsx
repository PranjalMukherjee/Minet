import { render } from '@testing-library/react';
import SignInTemplate from '.';
import React from 'react';

describe('SignIn/SignUpTemplate', () => {
  it('renders image and  body components', () => {
    const { getByTestId } = render(
        <SignInTemplate img={<div data-testid="mock-image" />}
        body={<div data-testid="mock-body" />}/>
    );

    const imageComponent = getByTestId('mock-image');
    const bodyComponent = getByTestId('mock-body');

    expect(imageComponent).toBeDefined();
    expect(bodyComponent).toBeDefined();
  });
})
