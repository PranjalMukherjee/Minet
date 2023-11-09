import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SliderAtom from ".";
const meta = {
  title: "atoms/Slider",
  component: SliderAtom,
} satisfies Meta<typeof SliderAtom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Slider: Story = {
  args: {
    max: 100,
    min: 0,
    onChange: action("changed"),
  },
};
