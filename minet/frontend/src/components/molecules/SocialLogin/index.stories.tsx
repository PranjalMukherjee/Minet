import { Meta, StoryFn } from "@storybook/react";
import SocialLogin from ".";
import React from "react";

export default {
    title: "Molecules/SocialLogin",
    component: SocialLogin
}as Meta<typeof SocialLogin>
const Template: StoryFn<typeof SocialLogin> = () => (
    <SocialLogin/>
  );
  export const Default = Template.bind({});
  Default.args = {
   
  }

  