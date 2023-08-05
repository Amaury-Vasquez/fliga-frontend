import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from ".";

const meta = {
  title: "Components/Checkbox",
  tags: ["autodocs"],
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    size: "md",
    variant: undefined,
    label: "",
  },
  decorators: [
    (Story) => (
      <div className="w-32">
        <Story />
      </div>
    ),
  ],
};
