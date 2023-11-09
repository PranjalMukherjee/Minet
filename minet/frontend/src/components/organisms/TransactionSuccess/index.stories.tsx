import { Meta, StoryFn } from "@storybook/react";
import TransactionSuccess from ".";
import React from "react";
import { TransactionSuccessProps } from "../../../interface";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme";
import { BUY_MESSAGE, SELL_MESSAGE } from '../../../utils/constant';
export default {
    title: "Organisms/TransactionSuccess",
    component: TransactionSuccess
}as Meta<TransactionSuccessProps>
const Template: StoryFn<TransactionSuccessProps> = (args) => (
    <ThemeProvider theme={theme}>
    <TransactionSuccess{...args}/>
    </ThemeProvider>
  );
  export const Buy = Template.bind({});
  Buy.args = {
   goToUSDCoin:()=>{},
   amount:"0.0234510 BTC",
   message:BUY_MESSAGE,
   coinLabel:"BUY CRYPTO"
}
  export const Sell = Template.bind({});
  Sell.args = {
    goToUSDCoin:()=>{},
   amount:"0.0234510 BTC",
   message:SELL_MESSAGE,
   coinLabel:"SELL CRYPTO"
  }

  