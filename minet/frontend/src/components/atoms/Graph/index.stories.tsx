import { Meta, StoryFn } from "@storybook/react";
import ResponsiveLine, { ResponsiveProps } from './index';
import React from "react";

import { ThemeProvider } from "@mui/material";
import theme from "../../../theme";
import { cryptoData, singleCryptoData } from "../../../utils/constant";



export default {
    title: 'Atoms/Graph',
    component: ResponsiveLine,
} as Meta<ResponsiveProps>;

const Template: StoryFn<ResponsiveProps> = (args) => (
<ThemeProvider theme={theme}>
        <ResponsiveLine {...args} />
</ThemeProvider>
)

  const margins = { top: 70, right: 20, bottom: 60, left: 80 }
  const legendProps = {
    translateX: 0,
    translateY: -50,
    itemHeight: 14,
    itemWidth: 100,
    itemSpacing: 2,
    symbolSize: 8,
    itemTextColor: '#000',
  }
  export const DoubleGraph = Template.bind({})
DoubleGraph.args = {
  margins: margins,
  graphData: cryptoData,
  showXAxis: true,
  enableYGrid: false,
   height:"400px",
   width:"700px",
  showLegends: true,
  legendProps: legendProps,
}
export const SingleGraph = Template.bind({})
SingleGraph.args = {
  margins: margins,
  graphData: singleCryptoData,
  enableYGrid: true,
  legendProps: legendProps,
  height:"400px",
  width:"700px",
  showLegends: true,
}
