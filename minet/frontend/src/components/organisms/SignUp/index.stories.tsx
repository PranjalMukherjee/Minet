import type { Meta, StoryFn } from "@storybook/react";
import Signup from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Signin } from "../SignIn/index.stories";

const meta: Meta<typeof Signup> = {
  title: "Organisms/Signup",
  component: Signup,
};

export default meta;
const Template: StoryFn = () => (
  <BrowserRouter>
    <Signup />
  </BrowserRouter>
);

export const SignupStory = Template.bind({});
Signin.args = {};
