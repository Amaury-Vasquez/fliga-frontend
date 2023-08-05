import clsx from "clsx";
import { forwardRef, HTMLProps } from "react";

export const TOGGLE_VARIANTS = {
  base: "",
  primary: "toggle-primary",
  secondary: "toggle-secondary",
  accent: "toggle-accent",
  success: "toggle-success",
  warning: "toggle-warning",
  error: "toggle-error",
  info: "toggle-info",
};

export const TOGGLE_SIZES = {
  xs: "toggle-xs",
  sm: "toggle-sm",
  md: "toggle-md",
  lg: "toggle-lg",
};

export interface SwapProps
  extends Omit<HTMLProps<HTMLInputElement>, "type" | "size" | "className"> {
  variant?: keyof typeof TOGGLE_VARIANTS;
  size?: keyof typeof TOGGLE_SIZES;
  label?: string;
  className?: string;
}

const Toggle = forwardRef<HTMLInputElement, SwapProps>(
  ({ size = "md", variant = "base", label, className, ...props }, ref) => {
    const Input = (
      <input
        className={clsx("toggle", TOGGLE_SIZES[size], TOGGLE_VARIANTS[variant])}
        type="checkbox"
        ref={ref}
        {...props}
      />
    );
    if (label)
      return (
        <label className={clsx("label cursor-pointer", className)}>
          <span className="label-text"> {label} </span>
          {Input}
        </label>
      );
    return Input;
  }
);

Toggle.displayName = "Toggle";
export default Toggle;
