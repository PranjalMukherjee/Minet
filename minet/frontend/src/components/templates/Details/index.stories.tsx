import { Meta, StoryFn } from "@storybook/react";
import Details from ".";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import {
  CONTENT,
  CORRELATION,
  RESOURCES_LIST,
} from "../../../utils/constant";
import Banner from "../../molecules/Banner";
import WatchList from "../../organisms/WatchList";
import LeftNavBar from "../../organisms/LeftNavBar";
const meta = {
  title: "templates/Dashboard",
  component: Details,
} satisfies Meta<typeof Details>;

export default meta;
const Template: StoryFn<typeof Details> = (args) => (
  <BrowserRouter>
    <Details {...args} />
  </BrowserRouter>
);
export const Dashboard = Template.bind({});
Dashboard.args = {
  title: "Trade",
  buttons: true,
  body1: <WatchList />,
  body2: <LeftNavBar />,
};

export const Trade = Template.bind({});
Trade.args = {
  title: "Trade",
  buttons: true,
  body1: (
    <Banner
      name="Bitcoin"
      resources={RESOURCES_LIST}
      items={CORRELATION}
      description={CONTENT}
    />
  ),
};
