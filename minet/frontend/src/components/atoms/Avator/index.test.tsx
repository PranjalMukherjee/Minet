import { fireEvent, render,screen } from "@testing-library/react";
import Avator from "../../../../public/images/avator.svg";
import AvatorAtom from "./index";
import React from "react";
test("render avator",() => {
    const onClick = jest.fn()
    const element = render(<AvatorAtom src={Avator} alt="avator" onClick={onClick} />)
    expect(element).toBeDefined()
    const avator = screen.getByTestId("avator")
    fireEvent.click(avator)
    expect(onClick).toBeCalled()
})