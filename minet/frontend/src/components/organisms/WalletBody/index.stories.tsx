import { Meta, StoryFn } from "@storybook/react";
import WalletBody from ".";
import React from "react";
import { IWalletBody } from '../../../interface/index';
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme";

export default {
    title: "Organisms/WalletBody",
    component: WalletBody,
}as Meta<IWalletBody>
const Template: StoryFn<IWalletBody> = (args) => (<ThemeProvider theme={theme}><WalletBody{...args}/></ThemeProvider>);
  export const Wallet = Template.bind({});
  Wallet.args={
    totalBalance:undefined,
    header:false,
    coinAmount:"85,553.73",
    coinName:"BTC",
    coinValue:0.0234510,
    showWallet:false
  }
  export const USD = Template.bind({});
  USD.args={
    totalBalance:34000,
    header:true,
    showWallet:true
  }