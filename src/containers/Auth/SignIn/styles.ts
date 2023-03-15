import { createStyles, makeStyles } from "@mui/styles";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import BORDER_RADIUS from "@/types/Enum/borderRadius";
import { styled } from "@mui/system";
import { Box, Stack, TextField, Typography } from "@mui/material";

export const Container = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#303030" : "#fff",
  boxShadow: (theme.shadows as Array<string>)[10],
  width: 300,
  borderRadius: BORDER_RADIUS.MD,
  padding: theme.spacing(4),
})) as typeof Stack;

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 36,
  textAlign: "center",
  fontWeight: 700,
})) as typeof Typography;

export const InputText = styled(TextField)(({ theme }) => ({
  borderRadius: BORDER_RADIUS.MD,
  borderColor: theme.palette.mode === "dark" ? "#fff" : "#dedeea",
  "&:hover": {
    borderColor: theme.palette.mode === "dark" ? "#fff" : "#dedeea",
  },
}));
