import type { Meta, StoryObj } from '@storybook/react';
import DividerAtom from '.';
import { Box } from '@mui/material';
import React from 'react';

const meta: Meta<typeof DividerAtom> = {
  title: 'Atoms/Divider',
  component: DividerAtom,
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical']
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof DividerAtom>;

export const HorizontaldDividerwithText: Story = {
  args: {
    direction: 'horizontal',
    children: <div>Or</div>
  }
};

export const HorizontalDivider: Story = {
  args: {
    direction: 'horizontal'
  }
};

export const VerticalDivider: Story = {
  args: {
    direction: 'vertical',
    sx:{
        width:"40px",
        height:"60px",
    },
  },
  render: (args) => (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <div>Vertical</div>
        <DividerAtom {...args} />
        <div>Divider</div>
      </Box>
    </>
  )
};
