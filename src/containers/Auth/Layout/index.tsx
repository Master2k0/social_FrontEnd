import { Box, Stack, ToggleButtonGroup, Typography } from "@mui/material";
import { useState } from "react";

import { ToggleButtonCustom } from "@/components/ToggleButton";
import SignIn from "@/containers/Auth/SignIn";
import SignUp from "@/containers/Auth/SignUp";
import { SignInContainer, SignUpContainer } from "@/containers/Auth/styles";
import { ColorLight } from "@/types/Enum/color";

import { Container } from "./styles";

export type TypePage = "sign-in" | "sign-up";

export default function Layout() {
  const [type, setType] = useState<TypePage>("sign-in");
  const handleChange = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    newAlignment: TypePage
  ) => {
    if (newAlignment !== null) {
      setType(newAlignment);
    }
  };
  return (
    <Container>
      <Stack flexDirection="column" spacing={4} alignItems="center">
        <Typography
          fontSize={24}
          color={ColorLight.WHITE}
          sx={{ textShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)" }}
        >
          WELCOME TO
        </Typography>
        <Typography
          fontSize={64}
          color={ColorLight.WHITE}
          sx={{ textShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)" }}
        >
          H!MOUNT
        </Typography>
        <Typography
          fontSize={16}
          width={400}
          textAlign="center"
          color={ColorLight.WHITE}
          sx={{ textShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)" }}
        >
          The next generation social network & community! Connect with your
          friends and play with our quests and badges gamification system!
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={type}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          size="large"
        >
          <ToggleButtonCustom padding="15px 30px" value="sign-in" disableRipple>
            Sign In
          </ToggleButtonCustom>
          <ToggleButtonCustom padding="15px 30px" value="sign-up" disableRipple>
            Sign Up
          </ToggleButtonCustom>
        </ToggleButtonGroup>
      </Stack>
      <Box>
        <SignInContainer isShow={type}>
          <Box display={type === "sign-in" ? "block" : "none"}>
            <SignIn />
          </Box>
        </SignInContainer>
        <SignUpContainer isShow={type}>
          <Box display={type === "sign-up" ? "block" : "none"}>
            <SignUp setType={setType} />
          </Box>
        </SignUpContainer>
      </Box>
    </Container>
  );
}
