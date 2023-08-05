import { FC } from "react";
import { MdOutlineSportsSoccer } from "react-icons/md";
import HeaderMenu from "./HeaderMenu";
import { Link } from "@/ui";

const Header: FC = () => (
  <header className="flex items-center justify-between p-4 pb-0">
    <div className="flex gap-2">
      <HeaderMenu />
      <Link
        className="flex gap-1 text-xl items-center font-semibold hover:bg-base-200 hover:no-underline py-2 px-4 rounded-md"
        href="/"
      >
        <MdOutlineSportsSoccer className="w-6 h-6" />
        Fliga
      </Link>
    </div>
    <nav className="flex gap-4">
      <Link variant="primary" href="/login" outlined>
        Registrarse
      </Link>
      <Link variant="primary" href="/login">
        Iniciar sesion
      </Link>
    </nav>
  </header>
);

export default Header;
