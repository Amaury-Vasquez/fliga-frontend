import clsx from "clsx";
import { FC, ReactNode } from "react";

export const BADGE_VARIANTS = {
  base: "",
  primary: "badge-primary",
  secondary: "badge-secondary",
  accent: "badge-accent",
  success: "badge-success",
  warning: "badge-warning",
  error: "badge-error",
  info: "badge-info",
  ghost: "badge-ghost",
  neutral: "badge-neutral",
};

export const BADGE_SIZES = {
  xs: "badge-xs",
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg",
};

export interface BadgeProps {
  children: ReactNode;
  variant?: keyof typeof BADGE_VARIANTS;
  size?: keyof typeof BADGE_SIZES;
  className?: string;
  outline?: boolean;
}

const Badge: FC<BadgeProps> = ({
  size = "md",
  variant = "base",
  outline = false,
  className,
  children,
}) => (
  <span
    className={clsx(
      "badge",
      BADGE_SIZES[size],
      BADGE_VARIANTS[variant],
      outline && "badge-outline",
      className
    )}
  >
    {children}
  </span>
);

export default Badge;
