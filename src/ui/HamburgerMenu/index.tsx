import clsx from "clsx";
import { FC, ReactNode, useState } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { useToggle } from "../../hooks";
import { Swap } from "../../ui";

export interface HamburgerMenuProps {
  menu: ReactNode;
  className?: string;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ menu, className }) => {
  const { isActive, toggle } = useToggle();

  return (
    <div className={clsx("relative", className)}>
      <button
        className={clsx(
          "p-2 w-fit hover:bg-base-200 rounded-full focus-visible:ring-offset-2 focus-visible:ring-primary",
          isActive && "bg-base-200"
        )}
        onClick={toggle}
      >
        {isActive ? (
          <MdOutlineClose className="w-8 h-8" />
        ) : (
          <MdOutlineMenu className="w-8 h-8" />
        )}
      </button>
      {isActive && <div className="absolute top-full mt-0.5">{menu}</div>}
    </div>
  );
};

export default HamburgerMenu;
