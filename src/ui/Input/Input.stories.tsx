import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta = {
  title: "Components/Input",
  tags: ["autodocs"],
  component: Input,
} satisfies Meta<typeof Input>;

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
