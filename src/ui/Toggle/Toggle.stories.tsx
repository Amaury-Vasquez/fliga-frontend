import type { Meta, StoryObj } from "@storybook/react";
import Toggle from ".";

const meta = {
  title: "Components/Toggle",
  tags: ["autodocs"],
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
  render: ({ ...args }) => <Toggle {...args} className="flex w-fit gap-4" />,
};
