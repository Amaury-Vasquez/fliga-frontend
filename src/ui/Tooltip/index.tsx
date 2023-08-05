import clsx from "clsx";
import { FC, ReactNode } from "react";

export const TOOLTIP_VARIANTS = {
  base: "tooltip",
  primary: "tooltip tooltip-primary",
  secondary: "tooltip tooltip-secondary",
  accent: "tooltip tooltip-accent",
  info: "tooltip tooltip-info",
  success: "tooltip tooltip-success",
  warning: "tooltip tooltip-warning",
  error: "tooltip tooltip-error",
};

export const TOOLTIP_POSITION = {
  top: "tooltip-top",
  right: "tooltip-right",
  bottom: "tooltip-bottom",
  left: "tooltip-left",
};

export interface TooltipProps {
  children: ReactNode;
  label: string;
  position?: keyof typeof TOOLTIP_POSITION;
  variant?: keyof typeof TOOLTIP_VARIANTS;
  open?: boolean;
  className?: string;
}

const Tooltip: FC<TooltipProps> = ({
  children,
  label,
  position = "top",
  variant = "base",
  open = false,
  className,
}) => (
  <div
    className={clsx(
      TOOLTIP_VARIANTS[variant],
      TOOLTIP_POSITION[position],
      open && "tooltip-open",
      className
    )}
    data-tip={label}
  >
    {children}
  </div>
);

export default Tooltip;
