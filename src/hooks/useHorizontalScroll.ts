/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useEffect, useRef } from "react";

export function useHorizontalScroll() {
  const elRef = useRef<HTMLElement>();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "auto",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => {
        el.removeEventListener("wheel", onWheel);
      };
    }
    return () => {};
  }, []);
  return elRef;
}
