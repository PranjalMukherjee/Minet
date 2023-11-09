import { Meta, StoryFn } from "@storybook/react";
import Footer from "./index";
import React from "react";
export default {
  title: "Molecules/Footer",
  component: Footer,
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => (
  <Footer />
);
export const Default = Template.bind({});
Default.args = {
  
};
