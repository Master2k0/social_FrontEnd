import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Rajdhani } from "@next/font/google";

const font = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
  subsets: ["latin", "latin-ext"],
});

const { palette } = createTheme();
const theme = (mode: string) => {
  return () =>
    createTheme({
      palette: {
        mode: mode === "light" ? "light" : "dark",
        secondary: {
          main: "#6c757d",
          light: "#bdbdbd",
          dark: "#424242",
        },
      },
      spacing: 4,
      typography: {
        fontFamily: font.style.fontFamily,
      },
    });
};

export default theme;
