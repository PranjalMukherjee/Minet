import { Meta, StoryObj } from "@storybook/react";
import IconTypo from "./index";
import OrangeCircle from "../../../../public/images/organeCircle.svg";
import BlueCircle from "../../../../public/images/blueCircle.svg";
const meta = {
  title: "molecules/IconTypo",
  component: IconTypo,
} satisfies Meta<typeof IconTypo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BitcoinIconTypo: Story = {
  args: {
    iconImge: OrangeCircle,
    text: "Bitcoin",
  },
};
export const InvestmentIconTypo: Story = {
  args: {
    iconImge: BlueCircle,
    text: "Total Investment",
  },
};
