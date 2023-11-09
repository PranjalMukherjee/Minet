import { Meta, StoryFn } from "@storybook/react";
import WatchList from ".";
import { WATCH_LIST } from "../../../utils/constant";
import React from "react";
import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "organisms/WatchList",
  component: WatchList,
} satisfies Meta<typeof WatchList>;

export default meta;
const Template: StoryFn<typeof WatchList> = () => (
  <BrowserRouter>
    <WatchList />
  </BrowserRouter>
);
export const Watchlist = Template.bind({});
Watchlist.args = {
  watchList: WATCH_LIST
}
