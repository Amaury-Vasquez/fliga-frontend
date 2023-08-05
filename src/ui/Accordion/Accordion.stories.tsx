import type { Meta, StoryObj } from "@storybook/react";
import Accordion from ".";

const meta = {
  title: "Components/Accordion",
  tags: ["autodocs"],
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

const TEMPLATE_ITEMS = Array.from({ length: 3 }, (_, idx) => ({
  title: "Click this to close the others",
  content: "I am the content!",
}));

export const Base: Story = {
  args: {
    join: true,
    type: undefined,
    titleWeight: "semibold",
    titleSize: "lg",
    bg: "bg-base-200",
    items: TEMPLATE_ITEMS,
    keyPrefix: "story-accordion",
  },
};
