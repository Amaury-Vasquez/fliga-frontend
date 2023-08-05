import clsx from "clsx";
import { HTMLProps, forwardRef } from "react";

const CHECKBOX_VARIANTS = {
  primary: "checkbox-primary",
  secondary: "checkbox-secondary",
  accent: "checkbox-accent",
  info: "checkbox-info",
  success: "checkbox-success",
  warning: "checkbox-warning",
  error: "checkbox-error",
};

const CHECKBOX_SIZES = {
  xs: "checkbox-xs",
  sm: "checkbox-sm",
  md: "checkbox-md",
  lg: "checkbox-lg",
};

export interface CheckboxProps
  extends Omit<HTMLProps<HTMLInputElement>, "size"> {
  size?: keyof typeof CHECKBOX_SIZES;
  variant?: keyof typeof CHECKBOX_VARIANTS;
  className?: string;
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, variant, size = "md", ...props }, ref) => {
    const Input = (
      <input
        className={clsx(
          "checkbox",
          CHECKBOX_SIZES[size],
          variant && CHECKBOX_VARIANTS[variant],
          className
        )}
        ref={ref}
        {...props}
        type="checkbox"
      />
    );
    if (label)
      return (
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">{label}</span>
            {Input}
          </label>
        </div>
      );
    return Input;
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
