import clsx from "clsx";
import { HTMLProps, forwardRef } from "react";
import ErrorMessage from "../ErrorMessage";
import Label from "../Label";

export const INPUT_VARIANTS = {
  primary: "input-primary",
  ghost: "input-ghost",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
};

export const INPUT_SIZES = {
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xs: "input-xs",
};

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, "size"> {
  label?: string;
  variant?: keyof typeof INPUT_VARIANTS;
  bordered?: boolean;
  error?: string;
  className?: string;
  type?: "text" | "password" | "email" | "number" | "tel";
  size?: keyof typeof INPUT_SIZES;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      label,
      error,
      bordered = true,
      size = "md",
      variant,
      className,
      ...props
    },
    ref
  ) => (
    <div className="flex flex-col text-left">
      {label && <Label text="label" />}
      <input
        className={clsx(
          "input text-left",
          bordered && "input-bordered",
          error ? INPUT_VARIANTS["error"] : variant && INPUT_VARIANTS[variant],
          INPUT_SIZES[size],
          className
        )}
        ref={ref}
        {...props}
        type={type}
      />
      {error && <ErrorMessage text={error} />}
    </div>
  )
);

Input.displayName = "Input";

export default Input;
