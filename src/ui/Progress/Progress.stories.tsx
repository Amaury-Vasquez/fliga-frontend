import type { Meta, StoryObj } from "@storybook/react";
import Progress from ".";

const meta = {
  title: "Components/Progress",
  tags: ["autodocs"],
  component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof Progress>;

export const Base: Story = {
  args: {
    value: undefined,
    variant: "base",
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};
