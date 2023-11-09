import { Meta, StoryObj } from "@storybook/react";
import TimePeriod from ".";

const meta: Meta<typeof TimePeriod> = {
  title: "Molecules/TimePeriod",
  component: TimePeriod,
};

export default meta;

type Story = StoryObj<typeof TimePeriod>;

export const TimePeriodStory: Story = {
  name: "TimePeriod",
  args: {
    isUnderlined: true,
  },
};
