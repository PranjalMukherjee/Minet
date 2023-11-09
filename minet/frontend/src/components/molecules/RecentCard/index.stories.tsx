import { Meta, StoryObj } from "@storybook/react";
import RecentCard from ".";
const meta = {
  title: "molecules/RecentCard",
  component: RecentCard,
} satisfies Meta<typeof RecentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Recet: Story = {
  args: {
    date: "June 23",
    name: "Bitcoin",
    sold: false,
    symbol:"BTC",
    quantity:"0.0234510",
    cost: "34,000.00",
    type:"SOLD",
    status:"pending"
  },
};
