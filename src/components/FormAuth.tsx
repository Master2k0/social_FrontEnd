import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import BORDER_RADIUS from "@/types/Enum/borderRadius";
import { ColorDark, ColorLight } from "@/types/Enum/color";

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 26,
  textAlign: "center",
  fontWeight: 500,
  color: theme.palette.mode === "dark" ? ColorDark.TEXT : ColorLight.TEXT,
  marginBottom: theme.spacing(19),
})) as typeof Typography;

export const Container = styled(Stack)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? ColorDark.DARK : ColorLight.WHITE,
  boxShadow: (theme.shadows as string[])[10],
  width: 350,
  borderRadius: BORDER_RADIUS.LG,
  padding: theme.spacing(16),
  [theme.breakpoints.down(500)]: {
    padding: theme.spacing(10),
  },
})) as typeof Stack;

export const ContainerForm = styled(Stack)(({ theme }) => ({})) as typeof Stack;
