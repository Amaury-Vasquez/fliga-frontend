import clsx from "clsx";
import { FC } from "react";
import { TEXT_COLORS } from "../../styles";

export const LOADER_SIZE = {
  xs: "loading-xs",
  sm: "loading-sm",
  md: "loading-md",
  lg: "loading-lg",
};

export const LOADER_VARIANTS = {
  spinner: "loading-spinner",
  dots: "loading-dots",
  ring: "loading-ring",
  ball: "loading-ball",
  bars: "loading-bars",
  infinity: "loading-infinity",
};

export interface LoaderProps {
  size?: keyof typeof LOADER_SIZE;
  color?: keyof typeof TEXT_COLORS;
  variant?: keyof typeof LOADER_VARIANTS;
}

const Loader: FC<LoaderProps> = ({
  variant = "spinner",
  size = "md",
  color = "default",
}) => (
  <span
    className={clsx(
      "loading",
      LOADER_VARIANTS[variant],
      LOADER_SIZE[size],
      TEXT_COLORS[color]
    )}
  />
);

export default Loader;
