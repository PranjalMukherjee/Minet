import { Meta, StoryObj } from "@storybook/react";
import SpeedDeliveryCard from "./index";

const meta = {
  title: "molecules/SpeedCard",
  component: SpeedDeliveryCard,
} satisfies Meta<typeof SpeedDeliveryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeliveryCard: Story = {
  args: {},
};
