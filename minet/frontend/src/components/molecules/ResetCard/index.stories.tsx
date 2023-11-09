import { Meta, StoryObj } from "@storybook/react";
import ResetCard from ".";
const meta = {
  title: "molecules/ResetCard",
  component: ResetCard,
} satisfies Meta<typeof ResetCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Reset: Story = {};
