import { MutableRefObject, useEffect } from "react";

export function useOnClickOutside(
  ref: MutableRefObject<any>,
  handler: () => void,
  listening: boolean
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) handler();
    };
    if (listening) window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, [ref, handler, listening]);
}
