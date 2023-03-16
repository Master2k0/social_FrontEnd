import { Button as ButtonMUI } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";

import BORDER_RADIUS from "@/types/Enum/borderRadius";
import { ColorDark, ColorLight } from "@/types/Enum/color";

export const Button = styled(ButtonMUI)(({ theme }) => ({
  borderRadius: BORDER_RADIUS.LG,
})) as typeof ButtonMUI;
