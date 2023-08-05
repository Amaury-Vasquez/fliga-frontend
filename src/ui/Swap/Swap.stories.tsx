import type { Meta, StoryObj } from "@storybook/react";
import {
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineVolumeOff,
  HiOutlineVolumeUp,
} from "react-icons/hi";
import Swap from ".";

const meta = {
  title: "Components/Swap",
  tags: ["autodocs"],
  component: Swap,
} satisfies Meta<typeof Swap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    asButton: true,
    rotate: true,
  },
  render: ({ ...args }) => (
    <div className="flex gap-4">
      <Swap {...args} />
      <Swap {...args} OnContent={HiOutlineSun} OffContent={HiOutlineMoon} />
      <Swap
        {...args}
        OnContent={HiOutlineVolumeUp}
        OffContent={HiOutlineVolumeOff}
      />
    </div>
  ),
};
