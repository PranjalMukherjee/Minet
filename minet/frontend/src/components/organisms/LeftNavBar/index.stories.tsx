import { Meta, StoryFn } from "@storybook/react";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import LeftNavBar from ".";

const meta = {
  title: "Organisms/LeftNavBar",
  component: LeftNavBar,
} satisfies Meta<typeof LeftNavBar>;

export default meta;

const Template: StoryFn<typeof LeftNavBar> = () => (
  <BrowserRouter>
    <LeftNavBar />
  </BrowserRouter>
);
export const SideNavBar = Template.bind({});
SideNavBar.args = {};
