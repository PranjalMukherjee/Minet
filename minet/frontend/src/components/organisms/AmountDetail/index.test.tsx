import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AmountDetail from ".";

describe("AmountDetail Component", () => {
  it("renders with initial values", () => {
    const { getByText } = render(
      <AmountDetail
        cryptoPrice={10}
        cryptoQuantity={50}
        cryptoAction={"Buy max"}
        symbol={"BTC"}
        setQuantity={() => {
          10;
        }}
        maximumValue={0}
      />
    );
    expect(getByText("Amount Details")).toBeDefined();
    expect(getByText("$ 500")).toBeDefined();

    expect(getByText("50")).toBeDefined();
  });

  it("updates quantity and total price when 'Buy max' button is clicked", () => {
    const { getByText } = render(
      <AmountDetail
        cryptoPrice={10}
        cryptoQuantity={50}
        cryptoAction={"Buy max"}
        symbol={"BTC"}
        setQuantity={() => {
          10;
        }}
        maximumValue={0}
      />
    );
    fireEvent.click(getByText("Buy max"));

    expect(getByText("Amount Details")).toBeDefined();
    expect(getByText("1 BTC = $ 10")).toBeDefined();
  });

  it("updates quantity and total price when 'Sell max' button is clicked", () => {
    const { getByText } = render(
      <AmountDetail
        cryptoPrice={10}
        cryptoQuantity={50}
        cryptoAction={"Sell max"}
        symbol={"BTC"}
        setQuantity={() => {
          10;
        }}
        maximumValue={0}
      />
    );
    fireEvent.click(getByText("Sell max"));
    expect(getByText("Amount Details")).toBeDefined();
    expect(getByText("1 BTC = $ 10")).toBeDefined();
  });
  it("updates quantity and total price when the slider is changed", () => {
    const { getByRole, getByText } = render(
      <AmountDetail
        cryptoPrice={10}
        cryptoQuantity={2}
        cryptoAction={"Buy max"}
        symbol={"BTC"}
        setQuantity={() => {
          10;
        }}
        maximumValue={0}
      />
    );
    const slider = getByRole("slider");
    fireEvent.change(slider, { target: { value: "75" } });
    expect(getByText("Amount Details")).toBeDefined();
    expect(getByText("$ 20")).toBeDefined();
  });
});
