import type { Meta, StoryObj } from "@storybook/react";
import Carousel from ".";

const meta = {
  title: "Components/Carousel",
  tags: ["autodocs"],
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    collapsedImage: false,
    withButtons: false,
    vertical: false,
    indicator: false,
    width: 300,
    height: 400,
    images: Array.from({ length: 8 }, (_, i) => ({
      src: `https://picsum.photos/200/300?random=${i + 1}`,
      alt: `Image ${i + 1}`,
    })),
    prefixKey: "carousel-storie",
  },
};
