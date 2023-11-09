import { Meta, StoryFn } from "@storybook/react";
import Header from ".";
import { BrowserRouter } from "react-router-dom";
import React from "react";
const meta = {
  title: "organisms/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
const Template: StoryFn<typeof Header> = (args) => (
    <BrowserRouter>
      <Header {...args} />
    </BrowserRouter>
  );

export const Headers = Template.bind({});
Headers.args = {
    title:"Trade",
    buttons:true
};
