import { Button as ButtonMUI } from "@mui/material";
import { styled } from "@mui/system";

import BORDER_RADIUS from "@/types/Enum/borderRadius";

export const Button = styled(ButtonMUI)(({ theme }) => ({
  borderRadius: BORDER_RADIUS.LG,
})) as typeof ButtonMUI;
