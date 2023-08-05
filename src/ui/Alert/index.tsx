import clsx from "clsx";
import { FC, ReactNode } from "react";
import {
  MdOutlineInfo,
  MdOutlineWarningAmber,
  MdOutlineCheckCircleOutline,
  MdOutlineErrorOutline,
} from "react-icons/md";
import { COMMON_POSITIONS, TEXT_COLORS } from "../../styles";

export const ALERT_ICONS = {
  Info: MdOutlineInfo,
  Warning: MdOutlineWarningAmber,
  Success: MdOutlineCheckCircleOutline,
  Error: MdOutlineErrorOutline,
};

export const ALERT_VARIANTS = {
  base: "",
  info: "alert-info",
  warning: "alert-warning",
  success: "alert-success",
  error: "alert-error",
};

export interface AlertProps {
  children: ReactNode;
  icon?: keyof typeof ALERT_ICONS;
  position?: keyof typeof COMMON_POSITIONS;
  variant?: keyof typeof ALERT_VARIANTS;
  iconColor?: keyof typeof TEXT_COLORS;
}

const Alert: FC<AlertProps> = ({
  children,
  icon,
  variant = "base",
  position = "bottom-left",
  iconColor = "default",
}) => {
  const Icon = icon ? ALERT_ICONS[icon] : null;
  return (
    <div
      className={clsx(
        "alert fixed z-40 w-fit pr-10",
        ALERT_VARIANTS[variant],
        COMMON_POSITIONS[position]
      )}
    >
      {Icon && (
        <Icon className={clsx("w-5 h-5 mr-2", TEXT_COLORS[iconColor])} />
      )}
      {children}
    </div>
  );
};

export default Alert;
