import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled(Box)(({ theme }) => ({
  minHeight: "calc(100vh - 200px)",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  padding: "100px 0px",
  [theme.breakpoints.down(1200)]: {
    flexDirection: "column",
    gap: "20px",
  },
})) as typeof Box;
