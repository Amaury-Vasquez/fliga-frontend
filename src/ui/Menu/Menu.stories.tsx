import type { Meta, StoryObj } from "@storybook/react";
import Menu from ".";

const meta = {
  title: "Components/Menu",
  tags: ["autodocs"],
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    size: "md",
    orientation: "vertical",
    itemsPrefix: "menu",
    items: [
      { content: <button>Item 1</button> },
      { content: <button>Item 2</button> },
      { content: <button>Item 3</button>, disabled: true },
    ],
  },
  render: ({ orientation, ...args }) => (
    <div {...(orientation === "vertical" && { className: "w-56" })}>
      <Menu {...args} orientation={orientation} />
    </div>
  ),
};
