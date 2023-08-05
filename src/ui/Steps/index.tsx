import clsx from "clsx";
import { FC, ReactNode } from "react";

export const STEP_VARIANTS = {
  primary: "step-primary",
  secondary: "step-secondary",
  accent: "step-accent",
  success: "step-success",
  warning: "step-warning",
  error: "step-error",
  info: "step-info",
};

export const STEP_ORIENTATION = {
  horizontal: "steps-horizontal",
  vertical: "steps-vertical",
};

export interface Step {
  content: ReactNode;
  dataContent?: string;
}

export interface StepsProps {
  steps: Step[];
  stepsPrefix: string;
  completedSteps: number;
  orientation?: keyof typeof STEP_ORIENTATION;
  variant?: keyof typeof STEP_VARIANTS;
}

const Steps: FC<StepsProps> = ({
  steps,
  stepsPrefix,
  variant = "primary",
  orientation = "horizontal",
  completedSteps,
}) => (
  <ul className={clsx("steps", STEP_ORIENTATION[orientation])}>
    {steps.map(({ content, dataContent }, idx) => (
      <li
        className={clsx("step", idx < completedSteps && STEP_VARIANTS[variant])}
        {...(dataContent && { "data-content": dataContent })}
        key={`stepsprefix:${stepsPrefix}${idx}`}
      >
        {content}
      </li>
    ))}
  </ul>
);

export default Steps;
