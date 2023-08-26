import clsx from "clsx";
import { FC } from "react";
import { MdOutlineSportsSoccer } from "react-icons/md";
import RegisterForm from "./RegisterForm";
import { SERVICES_INFO } from "@/constants";
import { TEXT_COLORS } from "@/styles";
import { Link } from "@/ui";

const Register: FC = () => {
  const colorArray = Object.values(TEXT_COLORS);

  return (
    <div className="w-full flex justify-center min-h-content items-start py-6 px-4">
      <div className="w-[1024px] grid grid-cols-5 h-fit p-4 max-w-screen flex-col gap-6">
        <article className="col-span-2 mt-32 flex flex-col gap-6">
          <h2 className="font-semibold text-xl text-left">
            Al registrarte, obtienes acceso a todas nuestras funciones,
            completamente gratis.
          </h2>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg text-center text-secondary">
              ¿Qué puedes hacer?
            </h3>
            <ul className="flex flex-col gap-2">
              {SERVICES_INFO.map((service, idx) => (
                <li
                  className="flex gap-2 items-center"
                  key={`app-service-info-${idx}`}
                >
                  <MdOutlineSportsSoccer className={clsx(colorArray[idx])} />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </article>
        <div className="px-8 col-span-3 w-[600px] max-w-full">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
