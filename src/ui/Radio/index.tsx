import clsx from "clsx";
import { forwardRef, HTMLProps } from "react";

export const RADIO_VARIANTS = {
  base: "",
  primary: "radio-primary",
  accent: "radio-accent",
  success: "radio-success",
  warning: "radio-warning",
  error: "radio-error",
  info: "radio-info",
  secondary: "radio-secondary",
};

export const RADIO_SIZES = {
  xs: "radio-xs",
  sm: "radio-sm",
  md: "radio-md",
  lg: "radio-lg",
};

export interface RadioProps
  extends Omit<HTMLProps<HTMLInputElement>, "type" | "size"> {
  variant?: keyof typeof RADIO_VARIANTS;
  size?: keyof typeof RADIO_SIZES;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ variant = "base", size = "md", className, ...props }, ref) => (
    <input
      className={clsx(
        "radio",
        RADIO_VARIANTS[variant],
        RADIO_SIZES[size],
        className
      )}
      ref={ref}
      type="radio"
      {...props}
    />
  )
);

Radio.displayName = "Radio";
export default Radio;
