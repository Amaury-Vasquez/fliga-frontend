import { joiResolver } from "@hookform/resolvers/joi";
import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { ConfirmSubmit, ConfirmSubmitState } from "@/components";
import { useToggle, useUserData } from "@/hooks";
import { IRegisterUser, registerUserSchema } from "@/models";
import { useRegister } from "@/mutations";
import { Button, Input, Link, PasswordInput, Modal } from "@/ui";

const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<IRegisterUser>({
    resolver: joiResolver(registerUserSchema),
  });
  const { setUserData } = useUserData();
  const { registerUser } = useRegister();
  const { isActive, toggle } = useToggle(false);

  const onSubmit = async (data: IRegisterUser) => {
    if (data.password !== data["repeat-password"]) {
      const matchingPasswordErrorMessage = "Las contraseñas no coinciden";
      setError("password", {
        message: matchingPasswordErrorMessage,
      });
      setError("repeat-password", {
        message: matchingPasswordErrorMessage,
      });
    } else {
      await registerUser(data).then((response) => {
        if (response) {
          if (response.isValid) {
            setUserData(response.data);
          } else {
            const errors = Object.keys(response.fields);
            errors.forEach((error) =>
              setError(error as keyof IRegisterUser, {
                type: "validation",
                message: response?.fields[error],
              })
            );
          }
        }
        return response;
      });
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <form
        className="w-full h-fit shadow-lg shadow-base-200 p-8 rounded-md bg-base-200 grid grid-cols-2 gap-x-4 gap-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="col-span-2 text-center flex items-center justify-center gap-2 font-semibold text-2xl text-primary">
          <MdOutlineSportsSoccer className="" /> Registro
        </span>
        <Input
          variant={isValid ? "success" : "base"}
          error={errors.name?.message}
          {...register("name", { required: true })}
          label="nombre"
          placeholder="Jose"
        />
        <Input
          variant={isValid ? "success" : "base"}
          error={errors.lastname?.message}
          {...register("lastname", { required: true })}
          label="apellidos"
          placeholder="Perez"
        />
        <Input
          variant={isValid ? "success" : "base"}
          error={errors.username?.message}
          {...register("username", { required: true })}
          label="nombre de usuario"
          placeholder="jospz"
        />
        <Input
          variant={isValid ? "success" : "base"}
          error={errors.age?.message}
          {...register("age", { required: true })}
          label="edad (años)"
          min={5}
          max={120}
          placeholder="22"
        />
        <Input
          error={errors.email?.message}
          variant={isValid ? "success" : "base"}
          containerClassName="col-span-2"
          {...register("email", { required: true })}
          label="correo electronico"
        />
        <PasswordInput
          error={errors.password?.message}
          variant={isValid && !errors.password ? "success" : "base"}
          containerClassName="col-span-2"
          showPassword={isActive}
          {...register("password", { required: true })}
          label="contraseña"
          onToggleVisibility={toggle}
          placeholder="****"
        />
        <PasswordInput
          error={errors["repeat-password"]?.message}
          variant={isValid && !errors["repeat-password"] ? "success" : "base"}
          containerClassName="col-span-2"
          showPassword={isActive}
          {...register("repeat-password", { required: true })}
          label="Verifica tu contraseña"
          onToggleVisibility={toggle}
          placeholder="****"
        />
        <div className="flex w-full col-span-2 pt-4 items-center justify-between">
          <Button className="w-1/2" variant="primary" type="submit">
            Registrarme
          </Button>
          <span className="text-sm flex flex-wrap justify-end">
            ¿Ya tienes una cuenta? <Link href="/login">Inicia sesión</Link>{" "}
          </span>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
