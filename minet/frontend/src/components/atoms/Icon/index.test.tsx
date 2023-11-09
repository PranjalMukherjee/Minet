import { render } from "@testing-library/react";
import React from "react";
import IconAtom from ".";
import Eye from "../../../../public/images/eyeicon.svg";


describe('Icon', () => {
  test('renders the component with the provided props', () => {
    const src = Eye;
    const alt = 'Test Image';

    const { getByAltText } = render(
      <IconAtom src={src} alt={alt}/>
    );

    const imageElement = getByAltText(alt);
    expect(imageElement).toBeDefined();
  });

});
