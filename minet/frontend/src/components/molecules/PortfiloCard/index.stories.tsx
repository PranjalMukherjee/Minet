import { Meta, StoryFn } from "@storybook/react";
import PortfolioCard from ".";
import BitcoinImage from "../../../..//public/images/bitcoin.svg";
import React from "react";
import { IPortfolioCardProps } from "../../../interface/protfilocard-interface";

export default {
  title: "Molecules/PortfolioCard",
  component: PortfolioCard,
  argTypes: {
    iconSrc: { control: "text" },
    coinName: { control: "text" },
    sortName: { control: "text" },
    growthPercent: { control: "text" },
  },
} as Meta;

const Template: StoryFn<typeof PortfolioCard> = (args: IPortfolioCardProps) => (
  <PortfolioCard {...args} />
);
export const BitcoinPortfolioCardProfit = Template.bind({});
BitcoinPortfolioCardProfit.args = {
  imageSrc: BitcoinImage,
  coinName: "Bitcoin",
  sortName: "BTC",
  valueInDollar: "34,000.00",
  growthPercent: "+1.06%",
};

export const BitcoinPortfolioCardLoss = Template.bind({});
BitcoinPortfolioCardLoss.args = {
  imageSrc: BitcoinImage,
  coinName: "Bitcoin",
  sortName: "BTC",
  valueInDollar: "74.28",
  growthPercent: "-1.34",
};
