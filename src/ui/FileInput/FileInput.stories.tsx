import type { Meta, StoryObj } from "@storybook/react";
import FileInput from ".";

const meta = {
  title: "Components/File Input",
  tags: ["autodocs"],
  component: FileInput,
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    size: "md",
    variant: undefined,
    bordered: true,
  },
};
