import { Box } from "@mui/material";
import { styled } from "@mui/system";

interface ITypeProps {
  isShow?: "sign-in" | "sign-up";
}

export const Background = styled(Box)(({ theme }) => ({
  backgroundImage: "url(/images/Login/Background.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
})) as typeof Box;

export const BackgroundOverlay = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(29,35,51, 0.5)",
})) as typeof Box;

export const Container = styled(Box)(({ theme }) => ({
  width: "80%",
  margin: "0 auto",
  position: "relative",
})) as typeof Box;

export const SignInContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isShow",
})<ITypeProps>(({ isShow, theme }) => ({
  height: isShow === "sign-in" ? "auto" : "0px",
  visibility: isShow === "sign-in" ? "visible" : "hidden",
  transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out ",
  opacity: isShow === "sign-in" ? 1 : 0,
  transform: isShow === "sign-in" ? "translateX(0)" : "translateX(50px)",
}));

export const SignUpContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isShow",
})<ITypeProps>(({ isShow, theme }) => ({
  height: isShow === "sign-up" ? "auto" : "0px",
  visibility: isShow === "sign-up" ? "visible" : "hidden",
  transition: "opacity 0.5s, transform 0.5s ease-in-out",
  opacity: isShow === "sign-up" ? 1 : 0,
  transform: isShow === "sign-up" ? "translateX(0)" : "translateX(50px)",
}));
