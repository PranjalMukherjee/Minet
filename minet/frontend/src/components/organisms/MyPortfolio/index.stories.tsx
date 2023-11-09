import { Meta, StoryFn } from "@storybook/react";

import React from "react";
import MyPortfolio from ".";
const meta = {
  title: "organisms/MyPortfolio",
  component: MyPortfolio,
} satisfies Meta<typeof MyPortfolio>;

export default meta;
const Template: StoryFn<typeof MyPortfolio> = () => (
  <MyPortfolio />
);

export const Headers = Template.bind({});
Headers.args = {
};
