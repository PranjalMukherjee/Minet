import { Meta, StoryFn } from "@storybook/react";
import ResetPassword from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "organisms/ResetPassword",
  component: ResetPassword,
} satisfies Meta<typeof ResetPassword>;

export default meta;
const Template: StoryFn = () => (
  <BrowserRouter>
    <ResetPassword />
  </BrowserRouter>
);

export const ResetPasswor = Template.bind({});
ResetPasswor.args = {};
