import { Meta, StoryObj } from "@storybook/react";
import InputTextFieldAtom from "./index";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
const meta = {
  title: "atoms/InputField",
  component: InputTextFieldAtom,
} satisfies Meta<typeof InputTextFieldAtom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    inputId: "email",
    isRequired: true,
    placeholder: "you@example.com",
  },
};

export const Password: Story = {
  args: {
    inputId: "password",
    isRequired: true,
    type:"password",
    placeholder: "you@example.com",
    icon:<VisibilityOff />
  },
};
