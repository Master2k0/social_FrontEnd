import { useEffect, useState } from "react";

export function useGetLocalStorage<T>(key: string, fallbackValue: T) {
  const [value, setValue] = useState<T | string>(fallbackValue);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ?? fallbackValue);
  }, [fallbackValue, key]);

  return [value, setValue] as const;
}
