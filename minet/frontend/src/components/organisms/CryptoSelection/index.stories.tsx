import { Meta, StoryObj } from "@storybook/react";
import CryptoSelection from ".";
const meta = {
  title: "organisms/CryptoSelection",
  component: CryptoSelection,
} satisfies Meta<typeof CryptoSelection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CryptoCards: Story = {};
