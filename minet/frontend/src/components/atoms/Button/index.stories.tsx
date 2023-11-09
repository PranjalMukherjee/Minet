import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Star from "../../../../public/images/star.svg";
import ButtonAtom from "./index";
import React from "react";

const meta = {
  title: "atoms/Button",
  component: ButtonAtom,
} satisfies Meta<typeof ButtonAtom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
  args: {
    children: "Sign In",
    variant: "contained",
    sx: { padding: "0px 232px" },
    onClick: action("clicked"),
    disabled: true,
  },
};

export const IconButton: Story = {
  args: {
    startIcon: <img src={Star} alt="img" />,
    children: "ADDED TO WATCHLIST",
    variant: "outlined",
    sx: { padding: "0px 16px", border: "1p solid #0052FF", color: "#0052FF" },
    onClick: action("clicked"),
  },
};
