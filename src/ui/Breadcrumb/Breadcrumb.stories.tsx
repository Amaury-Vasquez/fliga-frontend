import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from ".";

const meta = {
  title: "Components/Breadcrumb",
  tags: ["autodocs"],
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    items: [
      { item: "Home", href: "/" },
      { item: "Storie", href: "/storie" },
      { item: "Breadcrumb" },
    ],
  },
};
