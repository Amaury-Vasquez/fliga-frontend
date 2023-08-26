import clsx from "clsx";
import { HTMLProps, forwardRef } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
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
  base: "",
};

export const INPUT_SIZES = {
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xs: "input-xs",
};

export interface InputProps
  extends Omit<HTMLProps<HTMLInputElement>, "size" | "type"> {
  label?: string;
  variant?: keyof typeof INPUT_VARIANTS;
  bordered?: boolean;
  error?: string;
  className?: string;
  size?: keyof typeof INPUT_SIZES;
  showPassword?: boolean;
  onToggleVisibility?: () => void;
  containerClassName?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      bordered = true,
      size = "md",
      variant = "base",
      showPassword = false,
      onToggleVisibility,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => (
    <div className={clsx("flex flex-col text-left", containerClassName)}>
      {label && <Label text={label} />}
      <div className="w-full flex h-fit join bg-base-100 relative">
        <input
          className={clsx(
            "input text-left w-full pr-10",
            bordered && "input-bordered",
            error
              ? INPUT_VARIANTS["error"]
              : variant && INPUT_VARIANTS[variant],
            INPUT_SIZES[size],
            className
          )}
          ref={ref}
          {...props}
          type={showPassword ? "text" : "password"}
        />
        <button
          className="absolute right-0 h-full w-10 items-center justify-center flex"
          type="button"
          name="show-password"
          onClick={onToggleVisibility}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible className="text-secondary hover:text-secondary-focus" />
          ) : (
            <AiOutlineEye className="text-secondary hover:text-secondary-focus" />
          )}
        </button>
      </div>
      {error && <ErrorMessage text={error} />}
    </div>
  )
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
