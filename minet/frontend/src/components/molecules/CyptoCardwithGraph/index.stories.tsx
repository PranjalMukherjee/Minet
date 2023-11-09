import type { Meta, StoryObj } from "@storybook/react";
import CyptoCardGraph from ".";
import BitcoinImage from "../../../../public/images/bitcoinicon.svg";

const meta = {
  title: "molecules/CyptoCardGraph",
  component: CyptoCardGraph,
} satisfies Meta<typeof CyptoCardGraph>;

type Story = StoryObj<typeof meta>;

export const CyptoCardGraphs: Story = {
  args: {
    profitOrLossPercentage: 1.4,
    name: "Bitcion",
    valuePerOneCoin: 300439.93,
    icon:BitcoinImage
  },
};

export default meta;
