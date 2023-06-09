import "./styles.css";

import { ThemeProvider } from "@mui/material/styles";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { createContext, useMemo } from "react";

import ToastCustom from "@/components/ToastCustom";
import queryClient from "@/configs/tanStackConfig";
import customTheme, { readexPro } from "@/constants/theme";
import { useGetLocalStorage } from "@/hooks/useGetLocalStorage";

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
    <main className={`${readexPro.variable} font-readexPro bg-gray-100`}>
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ""}
      >
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <SnackbarProvider
                maxSnack={5}
                autoHideDuration={2000}
                Components={{
                  success: ToastCustom,
                  error: ToastCustom,
                  warning: ToastCustom,
                  info: ToastCustom,
                  default: ToastCustom,
                }}
              >
                <Component {...pageProps} />
              </SnackbarProvider>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </main>
  );
}
