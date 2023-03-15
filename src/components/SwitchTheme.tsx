import { useContext, useEffect } from "react";
import IconButton from "@mui/material/IconButton";

import { useGetLocalStorage } from "../hooks/useGetLocalStorage";
import { Box, Button } from "@mui/material";
import { ColorModeContext } from "@/pages/_app";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";

export default function SwitchTheme() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const handleClick = () => {
    const valueTheme = theme.palette.mode === "dark" ? "light" : "dark";
    colorMode.toggleColorMode(valueTheme)
    localStorage.setItem("theme", valueTheme);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={handleClick}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}
