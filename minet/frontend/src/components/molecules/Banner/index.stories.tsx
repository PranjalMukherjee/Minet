import { Meta, StoryObj } from "@storybook/react";
import Banner from ".";
import { CONTENT, CORRELATION, RESOURCES_LIST } from "../../../utils/constant";
const meta = {
  title: "molecules/Banner",
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BannerCard: Story = {
  args: {
    name:"Bitcoin",
    description:CONTENT,
    items:CORRELATION,
    resources:RESOURCES_LIST
  }
};
