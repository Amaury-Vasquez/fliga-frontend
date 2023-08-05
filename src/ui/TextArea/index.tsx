import clsx from "clsx";
import { HTMLProps, forwardRef } from "react";
import ErrorMessage from "../ErrorMessage";
import Label from "../Label";

export const TEXTAREA_VARIANTS = {
  primary: "textarea-primary",
  secondary: "textarea-secondary",
  accent: "textarea-accent",
  info: "textarea-info",
  success: "textarea-success",
  warning: "textarea-warning",
  error: "textarea-error",
  ghost: "textarea-ghost",
};

export const TEXTAREA_SIZES = {
  xs: "textarea-xs",
  sm: "textarea-sm",
  md: "textarea-md",
  lg: "textarea-lg",
};

export interface TextAreaProps
  extends Omit<HTMLProps<HTMLTextAreaElement>, "size"> {
  label?: string;
  variant?: keyof typeof TEXTAREA_VARIANTS;
  bordered?: boolean;
  error?: string;
  className?: string;
  size?: keyof typeof TEXTAREA_SIZES;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
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
      {label && <Label text={label} />}
      <textarea
        className={clsx(
          "textarea",
          bordered && "textarea-bordered",
          error
            ? TEXTAREA_VARIANTS["error"]
            : variant && TEXTAREA_VARIANTS[variant],
          TEXTAREA_SIZES[size],
          className
        )}
        {...props}
        ref={ref}
      />
      {error && <ErrorMessage text={error} />}
    </div>
  )
);

TextArea.displayName = "TextArea";
export default TextArea;
