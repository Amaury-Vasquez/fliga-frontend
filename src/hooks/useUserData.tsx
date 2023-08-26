import { useCookies } from "react-cookie";
import { UserData } from "@/interfaces";

export function useUserData() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const user: UserData | undefined = cookies.user;

  function setUserData(user: UserData) {
    setCookie("user", user);
  }

  function removeUserData() {
    removeCookie("user");
  }

  return { user, setUserData, removeUserData };
}
