import clsx from "clsx";
import { FC, ReactNode } from "react";

export interface MenuItem {
  content: ReactNode;
  disabled?: boolean;
}

export const MENU_SIZES = {
  xs: "menu-xs",
  sm: "menu-sm",
  md: "menu-md",
  lg: "menu-lg",
};

export const MENU_ORIENTATIONS = {
  horizontal: "menu-horizontal",
  vertical: "menu-vertical",
};

export interface MenuProps {
  size?: keyof typeof MENU_SIZES;
  orientation?: keyof typeof MENU_ORIENTATIONS;
  title?: string;
  items: MenuItem[];
  itemsPrefix: string;
  className?: string;
}

const Menu: FC<MenuProps> = ({
  size = "md",
  orientation = "vertical",
  title,
  items,
  itemsPrefix,
  className,
}) => (
  <ul
    className={clsx(
      "menu rounded-box bg-base-200",
      MENU_SIZES[size],
      MENU_ORIENTATIONS[orientation],
      className
    )}
  >
    {title && <li className="menu-title">{title}</li>}
    {items.map(({ content, disabled }, idx) => (
      <li
        className={clsx(disabled && "disabled")}
        key={`${itemsPrefix}:menuitem${idx}`}
      >
        {content}
      </li>
    ))}
  </ul>
);

export default Menu;
