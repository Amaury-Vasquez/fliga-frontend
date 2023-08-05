import clsx from "clsx";
import { FC } from "react";

export const ProgressVariants = {
  base: "",
  primary: "progress-primary",
  success: "progress-success",
  warning: "progress-warning",
  error: "progress-error",
  secondary: "progress-secondary",
  accent: "progress-accent",
  info: "progress-info",
};

export interface ProgressProps {
  value?: number;
  variant?: keyof typeof ProgressVariants;
}

const Progress: FC<ProgressProps> = ({ value, variant = "base" }) => (
  <progress
    className={clsx("progress", ProgressVariants[variant])}
    {...(value && { value })}
    max="100"
  />
);

export default Progress;
