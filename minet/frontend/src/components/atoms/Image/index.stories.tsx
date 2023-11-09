import { Meta, StoryObj } from "@storybook/react";
import ImageAtom from "./index";
import SignIn from "../../../../public/images/signin.svg";
const meta = {
  title: "atoms/Image",
  component: ImageAtom,
} satisfies Meta<typeof ImageAtom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {
  args: {
    sourceImage: SignIn,
    style: { width: 720, height: 768 },
  },
};
