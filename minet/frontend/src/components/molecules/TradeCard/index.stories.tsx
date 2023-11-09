import { Meta, StoryObj } from "@storybook/react";
import TradeCard from "./index";
import { action } from "@storybook/addon-actions";
import Bitcoin from "../../../../public/images/bitcoin.svg";
const meta = {
  title: "molecules/TradeCard",
  component: TradeCard,
} satisfies Meta<typeof TradeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    id: 1,
    cyptoDetail: { heading: "Bitcoin", icon: Bitcoin, subHeading: "BTC" },
    price: "$3,285,553.73",
    change: "1.06",
    marketCap: "$60.1T",
    watchListed: true,
    onClick: action("unwatchlist"),
  },
};

export const CardWithUnfilledStar: Story = {
  args: {
    id: 1,
    cyptoDetail: { heading: "Bitcoin", icon: Bitcoin, subHeading: "BTC" },
    price: "$3,285,553.73",
    change: "-5.03",
    marketCap: "$60.1T",
    watchListed: false,
    onClick: action("watchlist"),
  },
};
