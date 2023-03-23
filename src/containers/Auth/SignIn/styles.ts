import { Box, FormControlLabel } from "@mui/material";
import { styled } from "@mui/system";

import { ColorDark, ColorLight } from "@/types/Enum/color";

export const ControlCheckbox = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? ColorDark.TEXT : ColorLight.TEXT,
  alignItems: "center",
  "& .MuiFormControlLabel-label": {
    fontSize: 14,
  },
})) as typeof FormControlLabel;

export const RowForgot = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})) as typeof Box;
