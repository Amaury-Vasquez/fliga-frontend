import type { Meta, StoryObj } from "@storybook/react";
import Textarea from ".";

const meta = {
  title: "Components/Textarea",
  tags: ["autodocs"],
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: undefined,
    label: "Label",
    bordered: true,
    type: "text",
    size: "md",
    placeholder: "Placeholder",
  },
};
