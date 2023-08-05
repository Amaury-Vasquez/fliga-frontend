import type { Meta, StoryObj } from "@storybook/react";
import Badge from ".";

const meta = {
  title: "Components/Badge",
  tags: ["autodocs"],
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "Badge",
    variant: "primary",
    size: "md",
    outline: false,
  },
  render: ({ ...args }) => (
    <div className="flex gap-4">
      <Badge {...args} />
      <Badge {...args}>+99</Badge>
    </div>
  ),
};
