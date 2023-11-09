import { render } from "@testing-library/react"
import PaymentMethod from "."
import React from "react"

test("render component",() => {
    const element = render(<PaymentMethod cost="7899879" />)
    expect(element).toBeDefined()
})