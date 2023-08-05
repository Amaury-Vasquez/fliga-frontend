import type { Meta, StoryObj } from "@storybook/react";
import Steps from ".";

const meta = {
  title: "Components/Steps",
  tags: ["autodocs"],
  component: Steps,
} satisfies Meta<typeof Steps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    orientation: "horizontal",
    variant: "primary",
    completedSteps: 1,
    steps: [
      { content: "Step 1" },
      { content: "Step 2" },
      { content: "Step 3" },
      { content: "Completed", dataContent: "✓" },
    ],
    stepsPrefix: "story-steps",
  },
};
