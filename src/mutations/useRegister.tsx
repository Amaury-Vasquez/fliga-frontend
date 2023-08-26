import { useMutation } from "@tanstack/react-query";
import { REGISTER_URL } from "@/constants";
import {
  IRegisterUser,
  IRegisterUserSuccess,
  IRegisterUserError,
} from "@/models";

export async function register(
  userData: IRegisterUser
): Promise<IRegisterUserSuccess | IRegisterUserError | undefined> {
  try {
    const response = await fetch(REGISTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(userData),
    });

    return await response.json();
  } catch (error) {
    console.log({ error });
    return undefined;
  }
}

export function useRegister() {
  const { mutateAsync: registerUser, ...values } = useMutation(register);
  return { registerUser, ...values };
}
