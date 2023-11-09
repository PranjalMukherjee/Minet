import { Meta, StoryObj } from "@storybook/react";
import ChipAtom from "./index";
import theme from "../../../theme";

const meta = {
  title: "atoms/Chip",
  component: ChipAtom,
} satisfies Meta<typeof ChipAtom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bitcoin: Story = {
  args: {
    chipLabel: "Bitcoins",
    style: {
      backgroundColor: `${theme.palette.warning.bitcoinBackground}`,
      width: "86px",
      height: "38px",
      padding: "8px, 16px, 8px, 16px",
      borderRadius: "4px",
      border: "2px",
      gap: "10px",
    },
  },
};

export const Time: Story = {
  args: {
    chipLabel: "24 h",
    style: {
      backgroundColor: `${theme.palette.grey[50]}`,

      height: "18px",
      padding: "2px, 8px, 2px, 8px",
      borderRadius: "100px",
      gap: "10px",
    },
  },
};
