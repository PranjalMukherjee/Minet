import { Meta, StoryFn } from "@storybook/react";
import TransactionCard from ".";
import React from "react";
import { ITransactionCardProps } from "../../../interface";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme";

export default {

  title: "Organisms/TransactionCard",
  component: TransactionCard,
} as Meta<ITransactionCardProps>;
const Template: StoryFn<ITransactionCardProps> = (args) => (
  <ThemeProvider theme={theme}>
    <TransactionCard {...args} />
  </ThemeProvider>
);
export const Default = Template.bind({});
Default.args = {
  headerStatement: "You are buying",
  amount: "0.5234510 ETH",
  unit: "1ETH = $1,297.93",
  paymentSource: "Visa credit ...8845",
  deliveryFees: "0.005 ETH",
  deposit: "Etherium wallet",
  totalCurrencyAmount: "$648.54",
  totalCurrencyQuantity: "0.0234510 ETH",
  totalAmount: "$678.54",
  buttonLabel: "  BUY NOW",
  handleTransaction: () => {},
};

