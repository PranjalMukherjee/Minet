import type { Meta, StoryFn } from "@storybook/react";
import SignIn from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof SignIn> = {
  title: "Organisms/Signin",
  component: SignIn,
};

export default meta;
const Template: StoryFn = () => (
  <BrowserRouter>
    <SignIn />
  </BrowserRouter>
);

export const Signin = Template.bind({});
Signin.args = {};
