import { Meta, StoryObj } from "@storybook/react";
import Bitcoin from "../../../../public/images/bitcoin.svg";
import TotalBalance from ".";
const meta = {
  title: "molecules/TotalBalance",
  component: TotalBalance,
} satisfies Meta<typeof TotalBalance>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Total: Story = {
  args: {
    icon:Bitcoin,
    balance:"0.0234510 BTC",
    name:"Bitcoin"
  },
};