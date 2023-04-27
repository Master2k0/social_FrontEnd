import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Readex_Pro } from "@next/font/google";

export const readexPro = Readex_Pro({
  weight: ["200", "300", "400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--readex-pro",
});

const { palette } = createTheme();
const theme = (mode: string) => () =>
  createTheme({
    palette: {
      mode: mode === "light" ? "light" : "dark",
      ...(mode === "light"
        ? {
            primary: {
              main: "#23D2E2",
              light: "#BEFBFF",
              dark: "#1bc5d4",
            },
            secondary: {
              main: "#6c757d",
            },
            success: {
              main: "#28a745",
            },
            info: {
              main: "#17a2b8",
            },
            warning: {
              main: "#ffc107",
            },
          }
        : {
            primary: {
              main: "#7750f8",
            },
            secondary: {
              main: "#d6d8db",
            },
            success: {
              main: "#d1e7dd",
            },
            info: {
              main: "#cff4fc",
            },
            warning: {
              main: "#fff3cd",
            },
          }),
    },
    spacing: 4,
    typography: {
      fontFamily: readexPro.style.fontFamily,
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
    },
  });

export default theme;
