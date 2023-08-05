import type { Meta, StoryObj } from "@storybook/react";
import Radio from ".";

const meta = {
  title: "Components/Radio",
  tags: ["autodocs"],
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof Radio>;

export const Base: Story = {
  args: {
    variant: "base",
    name: "radio",
  },
  decorators: [
    (Story) => (
      <form className="flex w-fit gap-4">
        <Story />
        <Story />
        <Story />
      </form>
    ),
  ],
};
