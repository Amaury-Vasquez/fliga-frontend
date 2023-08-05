import Link from "next/link";
import { FC } from "react";
import { SERVICES } from "@/constants/services";
import { HamburgerMenu, Menu, MenuItem } from "@/ui";

const HeaderMenu: FC = () => {
  const menuItems: MenuItem[] = SERVICES.map(({ name, path }) => ({
    content: (
      <Link className="capitalize" href={path}>
        {name}
      </Link>
    ),
  }));

  return (
    <HamburgerMenu
      menu={
        <nav>
          <Menu className="w-52" items={menuItems} itemsPrefix="header-menu" />
        </nav>
      }
    />
  );
};

export default HeaderMenu;
