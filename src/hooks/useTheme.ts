import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState<string>();
  useEffect(() => {
    const hasTheme = localStorage.getItem("theme");
    if (!hasTheme) {
      const systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(systemTheme ? "dark" : "light");
      localStorage.setItem("theme", systemTheme ? "dark" : "light");
    } else {
      setTheme(hasTheme);
    }
  }, []);
  useEffect(() => {
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark" || (!localTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return { theme, toggleTheme };
}
