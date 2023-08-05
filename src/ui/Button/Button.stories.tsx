import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "Button",
  },
};
