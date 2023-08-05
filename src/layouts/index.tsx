import clsx from "clsx";
import { Montserrat } from "next/font/google";
import { FC, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Header } from "@/components";

const montserrat = Montserrat({ subsets: ["latin"] });

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [cookies, setCookie] = useCookies(["theme"]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document
        .querySelector("html")
        ?.setAttribute("data-theme", cookies.theme ?? "dracula");
      if (!cookies.theme) setCookie("theme", "dracula");
    }
  }, [cookies, setCookie]);

  return (
    <div className={clsx("min-h-screen", montserrat.className)}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
