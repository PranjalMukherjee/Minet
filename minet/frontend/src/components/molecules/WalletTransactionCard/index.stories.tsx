import { Meta, StoryObj } from "@storybook/react";
import WalletTransactionCard from "./index";

const meta = {
  title: "molecules/WalletTransactionCard",
  component: WalletTransactionCard,
} satisfies Meta<typeof WalletTransactionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    cost: "0.0010",
    cryptoName: "Bitcoin",
    crytoAction: "Purchased",
    date: "28",
    month: "Feb",
    name: "Badgley",
    symbol: "BTC",
    transactionStatus: "pending",
    income: "1000",
  },
};
