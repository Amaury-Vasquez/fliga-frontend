import type { Meta, StoryObj } from "@storybook/react";
import Loader from ".";

const meta = {
  title: "Components/Loader",
  tags: ["autodocs"],
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof Loader>;

export const Base: Story = {
  args: {
    size: "md",
    color: "default",
    variant: "spinner",
  },
};
