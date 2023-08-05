import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { useRating } from "../../hooks";
import Rating from ".";

const meta = {
  title: "Components/Rating",
  tags: ["autodocs"],
  component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof Rating>;

export const Base: Story = {
  args: {
    mask: "star",
    size: "md",
    name: "rating",
  },
  render: ({ ...args }) => {
    const Rate = () => {
      const { rating, onChange } = useRating(0);
      return <Rating {...args} value={rating} onChange={onChange} />;
    };
    return <Rate />;
  },
};
