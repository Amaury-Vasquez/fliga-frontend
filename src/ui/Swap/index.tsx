import clsx from "clsx";
import { HTMLProps, forwardRef } from "react";
import { IconType } from "react-icons";

export interface SwapProps
  extends Omit<
    HTMLProps<HTMLInputElement>,
    "type" | "defaultValue" | "className" | "ref"
  > {
  asButton?: boolean;
  rotate?: boolean;
  OnContent?: IconType | string;
  OffContent?: IconType | string;
  contentClassName?: string;
  labelClassName?: string;
}

const Swap = forwardRef<HTMLInputElement, SwapProps>(
  (
    {
      asButton = false,
      rotate = true,
      OnContent = "On",
      OffContent = "Off",
      labelClassName,
      contentClassName,
      ...props
    },
    ref
  ) => (
    <label
      className={clsx(
        "swap",
        labelClassName,
        rotate && "swap-rotate",
        asButton && "btn btn-circle"
      )}
    >
      <input type="checkbox" ref={ref} {...props} />
      {typeof OnContent === "string" ? (
        <div className={clsx("swap-on", contentClassName)}>{OnContent} </div>
      ) : (
        <OnContent className={clsx("swap-on w-8 h-8", contentClassName)} />
      )}
      {typeof OffContent === "string" ? (
        <div className={clsx("swap-off", contentClassName)}>{OffContent}</div>
      ) : (
        <OffContent className={clsx("swap-off w-8 h-8", contentClassName)} />
      )}
    </label>
  )
);

Swap.displayName = "Swap";
export default Swap;
