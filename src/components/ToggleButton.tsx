import { ToggleButton } from "@mui/material";
import { styled } from "@mui/system";

import BORDER_RADIUS from "@/types/Enum/borderRadius";
import { ColorDark, ColorLight } from "@/types/Enum/color";

interface IToggleButtonCustomProps {
  padding?: string;
  margin?: string;
}

export const ToggleButtonCustom = styled(ToggleButton, {
  shouldForwardProp: (prop) => prop !== "padding" && prop !== "margin",
})<IToggleButtonCustomProps>(({ padding, margin, theme }) => ({
  borderRadius: BORDER_RADIUS.LG,
  transition: "all 0.5s",
  backgroundColor: "rgba(0,0,0,0)",
  color: theme.palette.mode === "dark" ? ColorDark.DARK : ColorLight.WHITE,
  "&.MuiToggleButton-root.Mui-selected": {
    color: theme.palette.mode === "dark" ? ColorDark.WHITE : ColorLight.DARK,
    backgroundColor:
      theme.palette.mode === "dark" ? ColorDark.DARK : ColorLight.WHITE,
  },
  "&.MuiToggleButton-root": {
    padding: padding || "15px",
    margin: margin || "",
  },
}));
