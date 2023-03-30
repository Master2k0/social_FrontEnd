import { Box, styled } from "@mui/system";

import Left from "@/containers/Home/Header/Left";
import Right from "@/containers/Home/Header/Right";
import { ColorDark, ColorLight } from "@/types/Enum/color";

import Search from "./Search/index";

const Wrapper = styled(Box)(({ theme }) => ({
  padding: "0 20px",
  position: "sticky",
  maxHeight: "80px",
  height: "80px",
  top: "0",
  left: "0",
  right: "0",
  width: "auto",
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  width: "100%",
})) as typeof Box;

export default Object.assign(Wrapper, {
  Container,
  Left,
  Right,
  Search,
});
