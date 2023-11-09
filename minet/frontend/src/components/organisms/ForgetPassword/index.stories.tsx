import { Meta, StoryFn } from "@storybook/react";
import ForgetPassword from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "organisms/ForgetPassword",
  component: ForgetPassword,
} satisfies Meta<typeof ForgetPassword>;

export default meta;
const Template: StoryFn = () => (
  <BrowserRouter>
    <ForgetPassword />
  </BrowserRouter>
);

export const ForgetPasswordStory = Template.bind({});
ForgetPasswordStory.args = {};
