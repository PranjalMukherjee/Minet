import { render } from "@testing-library/react"
import Banner from "."
import React from "react"
import { CONTENT, CORRELATION, RESOURCES_LIST } from "../../../utils/constant"

test(   "render component",() => {
    const element = render(<Banner name="Bitcoin" resources={RESOURCES_LIST} items={CORRELATION} description={CONTENT} />)
    expect(element).toBeDefined()
})