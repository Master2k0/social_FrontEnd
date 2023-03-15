import type { AppProps } from "next/app";
import { createContext, useMemo, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGetLocalStorage } from "@/hooks/useGetLocalStorage";
import { Rajdhani } from "@next/font/google";
import customTheme from "@/constants/theme";

export const ColorModeContext = createContext({
  toggleColorMode: (value: string) => {},
  mode: "",
});

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useGetLocalStorage("theme", "light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: (value: string) => {
        setMode(value);
      },
      mode,
    }),
    []
  );

  const theme = useMemo(customTheme(mode), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
