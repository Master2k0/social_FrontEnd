import { yupResolver } from "@hookform/resolvers/yup";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Stack, useTheme } from "@mui/system";
import { useForm } from "react-hook-form";
import * as yup from "yup";

// import { useStyles } from "./styles";
import { Button } from "@/components/Button";
import { Container, ContainerForm, Title } from "@/components/FormAuth";
import { InputText } from "@/components/InputText";
import { ColorDark, ColorLight } from "@/types/Enum/color";

import { ControlCheckbox, RowForgot } from "./styles";

interface IFormInput {
  userName: string;
  password: string;
}

const schema = yup.object({
  userName: yup.string().required("User Name not empty"),
  password: yup.string().required("Password not empty"),
});

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (value: any) => {
    // console.log(value);
  };
  const theme = useTheme();
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Title>Account Login</Title>
          <ContainerForm spacing={7}>
            <InputText
              {...register("userName", { required: true })}
              label="Username or Email"
              variant="outlined"
              error={!!errors.userName}
              helperText={errors.userName?.message}
              inputRef={(input) => input?.focus()}
              autoComplete="off"
            />
            <InputText
              {...register("password", { required: true })}
              label="Password"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <RowForgot>
              <ControlCheckbox control={<Checkbox />} label="Remember Me" />
              <Button variant="text" type="button" sx={{ fontSize: 14 }}>
                Forgot Password!
              </Button>
            </RowForgot>
            <Button
              sx={{
                color: ColorLight.WHITE,
              }}
              variant="contained"
              type="submit"
            >
              Sign In
            </Button>
          </ContainerForm>
          <Divider sx={{ marginTop: "40px" }}>
            <Typography
              fontWeight={700}
              fontSize={14}
              sx={{
                color:
                  theme.palette.mode === "dark"
                    ? ColorDark.TEXT
                    : ColorLight.TEXT,
              }}
            >
              Login with your Social Account
            </Typography>
          </Divider>
          <Stack
            direction="row"
            spacing={10}
            alignItems="center"
            justifyContent="center"
            sx={{
              marginTop: "40px",
            }}
          >
            <IconButton color="primary">
              <TwitterIcon />
            </IconButton>
            <IconButton color="primary">
              <GoogleIcon />
            </IconButton>
            <IconButton color="primary">
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Container>
      </form>
    </Box>
  );
}

export default SignIn;
