import { Meta, StoryFn } from "@storybook/react";
import CurrencySelector from ".";
import React from "react";

export default {
    title: "Molecules/CurrencySelector",
    component: CurrencySelector
}as Meta<typeof CurrencySelector>
const Template: StoryFn<typeof CurrencySelector> = (args) => (
    <CurrencySelector{...args}/>
  );
  export const Default = Template.bind({});
  Default.args = {
   handleCurrencyClick:(id)=>{console.log(id)}
  }

  