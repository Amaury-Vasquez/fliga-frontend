import type { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import Button from "../Button";
import Modal from ".";

const meta = {
  title: "Components/Modal",
  tags: ["autodocs"],
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const TemplateChildren = () => (
  <>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button to close</p>
  </>
);
export const Base: Story = {
  args: {
    position: "center",
    showCloseButton: true,
    children: <TemplateChildren />,
  },
  decorators: [
    (Story) => (
      <div className="w-full h-full">
        <Story />
        <Button onClick={() => document?.querySelector("dialog")?.showModal()}>
          Open modal
        </Button>
      </div>
    ),
  ],
};
