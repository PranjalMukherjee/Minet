import { Meta, StoryObj } from "@storybook/react";
import PortfolioGraph from ".";
import { cryptoData, singleCryptoData } from "../../../utils/constant";
const meta = {
  title: "organisms/PortfolioGraph",
  component: PortfolioGraph,
} satisfies Meta<typeof PortfolioGraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoWayGraph: Story = {
  args: {
    coinName:"Bitcoin",
    totalCost:"11,900,204",
    totalPercent:"1.2",
    coinCost:"3,285,553.73",
    coinPercent: "8.2",
    graphData:cryptoData,
    legends: true,
  },
};

export const SingleGraph: Story = {
  args: {
     coinCost:"3,285,553.73",
    coinPercent: "-8.2",
    graphData:singleCryptoData,
    legends: false,
  },
};