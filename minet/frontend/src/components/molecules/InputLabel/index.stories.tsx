import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import InputLabel from "./index";
import InputLabelProps from "../../../interface/input-label-interface";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme/index";
import { action } from "@storybook/addon-actions";
export default {
  title: "Molecules/InputLabel",
  component: InputLabel,
} as Meta;

const Template: StoryFn<InputLabelProps> = (args) => (
  <ThemeProvider theme={theme}>
    <InputLabel
      onChange={action("email entered in the text field")}
      {...args}
    />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Email",

  variant: "label",
  placeholder: "abc@email.com",
  type: "text",
};
