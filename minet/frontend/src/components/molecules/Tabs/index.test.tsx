import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import Tabs from './';

describe('Tabs Component', () => {
  const tabItems = [
    { id: 1, name: 'Tab 1', disabled: false },
    { id: 2, name: 'Tab 2', disabled: true },
    { id: 3, name: 'Tab 3', disabled: false },
  ];

  it('renders Tabs component with tab items', () => {
    render(
      <Tabs
        tabItems={tabItems}
        sx={{}}
        activeIndex={0}
        handleChange={() => {}}
      />
    );
    tabItems.forEach((item) => {
      const tabLabel = screen.getByText(item.name);
      expect(tabLabel).toBeInTheDocument();
    });
  });
});
