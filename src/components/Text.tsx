import { Typography } from "@mui/material";
import { styled } from "@mui/system";

import { ColorDark, ColorLight } from "@/types/Enum/color";

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  color: theme.palette.mode === "dark" ? ColorDark.TEXT : ColorLight.TEXT,
})) as typeof Typography;
