import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DividerAtom from '.'


describe('render a divider Component', () => {
  test('should render a horizontal divider', () => {
    const { container } = render(<DividerAtom direction="horizontal"/>)
    const divider = container.querySelector('[data-testid="divider"]')
    expect(divider).toBeInTheDocument()
  })

  test('should render a vertical divider', () => {
    const { container } = render(<DividerAtom direction="vertical" />)
    const divider = container.querySelector('[data-testid="divider"]')
    expect(divider).toBeInTheDocument()
  })

  test('should render with custom styles', () => {
    const customStyle = { backgroundColor: 'blue', height: '20px' }
    const { container } = render(
      <DividerAtom direction="horizontal" sx={customStyle} />
    )
    const divider = container.querySelector('[data-testid="divider"]')
    expect(divider).toBeInTheDocument()
    expect(divider).toHaveStyle('background-color: blue')
    expect(divider).toHaveStyle('height: 20px')
  })
})
