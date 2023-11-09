import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Checkout from ".";
import CryptoSelection from "../../organisms/CryptoSelection";
import PaymentMethod from "../../molecules/PaymentMethod";
import AmountDetail from "../../organisms/AmountDetail";
import SpeedDeliveryCard from "../../molecules/SpeedDeliveryCard";
import TransactionCard from "../../organisms/TransactionCard";

const meta = {
  title: "templates/Checkout",
  component: Checkout,
} satisfies Meta<typeof Checkout>;

export default meta;
const Template: StoryFn<typeof Checkout> = (args) => (
  <BrowserRouter>
    <Checkout {...args} />
  </BrowserRouter>
);
export const CheckoutTemplate = Template.bind({});
CheckoutTemplate.args = {
  title: "Checkout",
  body1: (
    <>
      <CryptoSelection
        setUnitPrice={() => 1}
        setSymbol={() => "BTC"}
        setCoinName={() => "bitcoin"}
      />

      <PaymentMethod cost={"1000"} />

      <AmountDetail
        cryptoPrice={1000}
        cryptoQuantity={1}
        cryptoAction={"Buy Max"}
        symbol={"BTC"}
        setQuantity={() => {
          10;
        }}
        maximumValue={0}
      />

      <SpeedDeliveryCard />
    </>
  ),
  buttons: false,
  body2: (
    <>
      <TransactionCard
        headerStatement="You are buying"
        amount="0.5234510 ETH"
        unit="1ETH = $1,297.93"
        paymentSource="Visa credit ...8845"
        deliveryFees="0.005 ETH"
        deposit="Etherium wallet"
        totalCurrencyAmount="$648.54"
        totalCurrencyQuantity="0.0234510 ETH"
        totalAmount="$678.54"
        buttonLabel="  BUY NOW"
        handleTransaction={() => console.log("hi")}
      />
    </>
  ),
};
