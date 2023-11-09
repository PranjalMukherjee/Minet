import { Meta, StoryFn } from "@storybook/react";

import React from "react";
import MyWallet from ".";
import ImageAtom from "../../atoms/Image";

import RecentTransaction from "../../../../public/images/recentTranscations.svg";
const meta = {
  title: "organisms/MyWallet",
  component: MyWallet,
} satisfies Meta<typeof MyWallet>;

export default meta;
const Template: StoryFn<typeof MyWallet> = () => (
  <MyWallet
    recentTransaction={
      <ImageAtom
        sourceImage={RecentTransaction}
        style={{ width: 350, height: 90, top: 208, left: 24 }}
      />
    }
  />
);

export const Headers = Template.bind({});
Headers.args = {
  cost: "1000",
};
