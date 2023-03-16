import { Box } from "@mui/material";

import SwitchTheme from "@/components/SwitchTheme";
import SignIn from "@/containers/Auth/SignIn";
import SignUp from "@/containers/Auth/SignUp";

function AuthContainer() {
  return (
    <Box>
      <SignUp />
      <SignIn />
    </Box>
  );
}

export default AuthContainer;
