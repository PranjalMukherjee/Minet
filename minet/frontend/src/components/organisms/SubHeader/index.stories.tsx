import type { Meta, StoryObj } from "@storybook/react";
import SubHeader from ".";
import BitcoinImg from "../../../../public/images/bitcoin.svg";

const meta: Meta<typeof SubHeader> = {
  title: "Organisms/SubHeader",
  component: SubHeader,
};
export default meta;
type Story = StoryObj<typeof SubHeader>;

export const TradeSubHeader: Story = {
  args: {
    cryptoName: "Bitcoin",
    icon: BitcoinImg,
    symbol: "BTC",
    circulatingSupply: 123,
    growthRate: 0.16,
    isPriceCorrelation: true,
    marketCap: 1000,
    volume: 34,
  },
};
