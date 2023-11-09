import type { Meta, StoryFn } from "@storybook/react";
import AssetTable from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof AssetTable> = {
  title: "Organisms/AssetTable",
  component: AssetTable,
};

export default meta;
const Template: StoryFn = () => (
  <BrowserRouter>
    <AssetTable selectedTab={0} />
  </BrowserRouter>
);

export const AssetTableList = Template.bind({});
AssetTableList.args = {};
