import clsx from "clsx";
import { FC, ReactNode, useRef } from "react";
import { useOnClickOutside, useToggle } from "../../hooks";
import { Variant, HORIZONTAL_POSITIONS } from "../../styles";
import Button from "../Button";

export const VERTICAL_POSITIONS = {
  top: "bottom-full mb-2",
  bottom: "top-full",
};

export interface DropdownProps {
  toggleContent: ReactNode;
  menu: ReactNode;
  buttonVariant?: Variant;
  toggleClassName?: string;
  horizontal?: keyof typeof HORIZONTAL_POSITIONS;
  vertical?: keyof typeof VERTICAL_POSITIONS;
  closeOnItemClick?: boolean;
  className?: string;
}

const Dropdown: FC<DropdownProps> = ({
  toggleContent,
  menu,
  buttonVariant = "ghost",
  toggleClassName,
  horizontal = "left",
  vertical = "bottom",
  closeOnItemClick = false,
  className,
}) => {
  const { isActive, toggle, deactivate } = useToggle();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, deactivate, isActive);

  return (
    <div ref={ref} className="relative">
      <Button
        className={clsx(toggleClassName)}
        variant={buttonVariant}
        onClick={toggle}
      >
        {toggleContent}
      </Button>
      {isActive && (
        <div
          className={clsx(
            "absolute",
            VERTICAL_POSITIONS[vertical],
            HORIZONTAL_POSITIONS[horizontal],
            className
          )}
          {...(closeOnItemClick && { onClick: deactivate })}
        >
          {menu}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
