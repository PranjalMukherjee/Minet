import { Meta, StoryFn } from "@storybook/react";
import AmountDetail from ".";
import React from "react";

export default {
  title: "organisms/AmountDetail",
  component: AmountDetail,
} as Meta<typeof AmountDetail>;
const Template: StoryFn<typeof AmountDetail> = () => (
  <AmountDetail
    cryptoPrice={3406069.54}
    cryptoQuantity={0.023451}
    cryptoAction={"Buy max"}
    symbol={"BTC"}
    setQuantity={() => {
      10;
    }}
    maximumValue={0}
  />
);
const Template1: StoryFn<typeof AmountDetail> = () => (
  <AmountDetail
    cryptoPrice={3406069.54}
    cryptoQuantity={0.023451}
    cryptoAction={"Sell max"}
    symbol={"BTC"}
    setQuantity={() => {
      10;
    }}
    maximumValue={0}
  />
);
export const BuySlider = Template.bind({});
BuySlider.args = {};

export const SellSlider = Template1.bind({});
SellSlider.args = {};
