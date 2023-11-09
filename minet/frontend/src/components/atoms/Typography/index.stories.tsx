import { Meta, StoryFn } from "@storybook/react";
import TypographyAtom, { TypographyProps } from "./index";
import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme";
export default {
  title: "Atoms/Typography",
  component: TypographyAtom,
} as Meta<TypographyProps>;

const Template: StoryFn<TypographyProps> = (args) => (
  <ThemeProvider theme={theme}>
  <TypographyAtom {...args} />
  </ThemeProvider>
);
export const typo2 = Template.bind({});
typo2.args = {
  color: theme.palette.primary[500],
  label: "This is typography",
  variant: "h4",
};
