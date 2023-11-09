import { Meta, StoryFn } from "@storybook/react";
import CryptoCard from "./index";
import Bitcoin from "../../../../public/images/bitcoin.svg";
import React from "react";
import { CryptoCardProps } from "../../../interface/index";
export default {
  title: "Molecules/CryptoCard",
  component: CryptoCard,
} as Meta<CryptoCardProps>;

const Template: StoryFn<CryptoCardProps> = (args) => <CryptoCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  isChecked: false,
  currencyName: "Bitcoin",
  currencyImage: Bitcoin,
  currencyValue: "$3,406,069.54",
};
export const Default1 = Template.bind({});
Default1.args = {
  isChecked: false,
  currencyName: "Etherium",
  currencyImage: Bitcoin,
  currencyValue: "$30.54",
};
export const Checked = Template.bind({});
Checked.args = {
  isChecked: true,
  currencyName: "Bitcoin",
  currencyImage: Bitcoin,
  currencyValue: "$3,406,069.54",
};
