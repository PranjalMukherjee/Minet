import { Meta, StoryObj } from "@storybook/react";
import PaymentMethod from ".";
const meta = {
  title: "molecules/PaymentMethod",
  component: PaymentMethod,
} satisfies Meta<typeof PaymentMethod>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Payment: Story = {
  args: {
    cost:"0.0234510",
  },
};