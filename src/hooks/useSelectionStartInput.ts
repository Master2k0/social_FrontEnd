import { type RefObject, useEffect, useState } from "react";

const useSelectionStartInput = (inputRef: RefObject<HTMLInputElement>) => {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const listener = (event: Event) => {
      if (inputRef) {
        const el = inputRef?.current;
        if (!el) return;
        if (el.selectionStart === null) return;
        setPosition(el.selectionStart);
      }
    };
    document.addEventListener("keyup", listener);
    document.addEventListener("mouseup", listener);
    return () => {
      document.removeEventListener("keyup", listener);
      document.removeEventListener("mouseup", listener);
    };
  }, [inputRef]);
  return { position, setPosition };
};
export default useSelectionStartInput;
