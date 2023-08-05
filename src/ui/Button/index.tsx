import clsx from "clsx";
import { FC, HTMLProps, ReactNode } from "react";
import {
  VARIANT_STYLES,
  Variant,
  ButtonSize,
  BUTTON_SIZES,
  BUTTON_SHAPES,
} from "../../styles/variants";
import { ButtonType } from "@/types/button";

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, "size"> {
  className?: string;
  children?: ReactNode;
  variant?: Variant;
  type?: ButtonType;
  size?: ButtonSize;
  shape?: keyof typeof BUTTON_SHAPES;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "base",
  type = "button",
  className,
  size = "md",
  shape,
  disabled = false,
  ...props
}) => (
  <button
    className={clsx(
      "btn",
      className,
      variant !== "base" && VARIANT_STYLES[variant],
      BUTTON_SIZES[size],
      shape && BUTTON_SHAPES[shape],
      disabled && "btn-disabled"
    )}
    {...props}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
