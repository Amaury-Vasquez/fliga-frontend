import Joi from "joi";
import { UserData } from "@/interfaces";

export interface IRegisterUser {
  name: string;
  lastname: string;
  username: string;
  age: number;
  email: string;
  password: string;
  "repeat-password": string;
}

export const registerUserSchema = Joi.object<IRegisterUser>({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  username: Joi.string().required(),
  age: Joi.number().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required().min(8),
  "repeat-password": Joi.string().required().min(8),
}).messages({
  "any.required": "El campo es requerido",
  "string.required": "El campo es requerido",
  "string.empty": "El campo no puede estar vacío",
  "string.email": "El email no es válido",
  "number.base": "La edad debe ser un número",
  "object.unknown": "El campo no es válido",
});

export interface IRegisterUserSuccess {
  isValid: true;
  data: UserData;
}

export interface IRegisterUserError {
  isValid: false;
  fields: {
    [key: string]: string;
  };
}
