import { Meta, StoryObj } from "@storybook/react";
import Avator from "../../../../public/images/avator.svg";
import { action } from "@storybook/addon-actions";
import AvatorAtom from ".";
const meta = {
  title: "atoms/Avator",
  component: AvatorAtom,
} satisfies Meta<typeof AvatorAtom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: Avator,
    alt:"avator",
    onClick:action("Clicked")
  },
};