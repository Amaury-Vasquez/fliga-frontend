import clsx from "clsx";
import { FC } from "react";
import { MdOutlineSportsSoccer } from "react-icons/md";
import HeaderMenu from "./HeaderMenu";
import { Link } from "@/ui";

const Header: FC = () => (
  <header className="flex items-center justify-between px-4 p-3 bg-base-200">
    <div className="flex gap-2">
      {/* <HeaderMenu /> */}
      <Link
        className={clsx(
          "flex gap-1 text-xl items-center font-semibold py-2 px-4 rounded-md",
          "hover:shadow-md hover:shadow-base-100 transition-shadow hover:no-underline"
        )}
        color="secondary"
        href="/"
      >
        <MdOutlineSportsSoccer className="w-6 h-6" />
        Fliga
      </Link>
    </div>
    <nav className="flex gap-4">
      <Link variant="primary" href="/register" outlined>
        Registrarse
      </Link>
      <Link variant="primary" href="/login">
        Iniciar sesion
      </Link>
    </nav>
  </header>
);

export default Header;
