import type { Meta, StoryObj } from "@storybook/react";
import Alert from ".";

const meta = {
  title: "Components/Alert",
  tags: ["autodocs"],
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    position: "bottom-left",
    variant: "base",
    icon: undefined,
    iconColor: "default",
    children: "This is an alert notification",
  },
  decorators: [
    (Story) => (
      <div className="w-full h-full p-4">
        <Story />
      </div>
    ),
  ],
};
