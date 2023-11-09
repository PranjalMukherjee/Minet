import { render } from "@testing-library/react"
import Bitcoin from "../../../../public/images/bitcoin.svg";
import TotalBalance from "."
import React from "react"

test("render component",() => {
    const element = render(<TotalBalance balance="345 BTC" icon={Bitcoin} name="Bitcoin" />)
    expect(element).toBeDefined()
})