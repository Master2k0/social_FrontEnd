import { useEffect, useState } from "react";

// export const useDebounce = (value: string, delay: number) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };

export const useDebounce = () => {
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout>();
  function debounce(func: () => void, wait = 100) {
    clearTimeout(typingTimeout);
    const timeout = setTimeout(() => {
      func();
    }, wait);
    setTypingTimeout(timeout);
  }
  return debounce;
};
