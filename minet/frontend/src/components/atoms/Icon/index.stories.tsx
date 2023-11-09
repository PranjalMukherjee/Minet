import type { Meta, StoryObj } from '@storybook/react';
import IconAtom from ".";
import Eye from "../../../../public/images/eyeicon.svg";

const meta = {
    title: "atoms/icon",
    component: IconAtom,
} satisfies Meta <typeof IconAtom>


type Story  = StoryObj<typeof meta>

export const EyeIcon: Story = {
    args : {
     src:Eye ,
     style: {
       height: " 24px",
       width: "24px",
       left: "474px",
       top: "-154px",
       borderRadius: " 0px",
     },
     alt: "not found",
   },
   };

export default meta;