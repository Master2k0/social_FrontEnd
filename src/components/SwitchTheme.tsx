import useTheme from "@/hooks/useTheme";

export default function SwitchTheme() {
  const { theme, toggleTheme } = useTheme();
  // console.log(theme);

  return (
    <>
      fdfd
      {/* <div onClick={toggleTheme}>{theme === "dark" ? "dark" : "light"}</div> */}
    </>
  );
}
