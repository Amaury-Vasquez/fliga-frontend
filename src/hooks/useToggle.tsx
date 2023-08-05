import { useState } from "react";

export const useToggle = (initialIsActive: boolean = false) => {
  const [isActive, setIsActive] = useState<boolean>(initialIsActive);
  const toggle = () => setIsActive(!isActive);
  const activate = () => {
    if (!isActive) setIsActive(true);
  };
  const deactivate = () => {
    if (isActive) setIsActive(false);
  };

  return { isActive, toggle, activate, deactivate };
};
