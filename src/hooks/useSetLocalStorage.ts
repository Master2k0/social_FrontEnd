import { useEffect } from "react";

export function useSetLocalStorage<T>(key: string, fallbackValue: T) {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(fallbackValue));
  }, [key, fallbackValue]);
}
