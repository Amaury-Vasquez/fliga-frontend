import type { Meta, StoryObj } from "@storybook/react";
import Link from ".";

const meta = {
  title: "Components/Link",
  tags: ["autodocs"],
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "Link",
    href: "",
    underline: false,
  },
};
