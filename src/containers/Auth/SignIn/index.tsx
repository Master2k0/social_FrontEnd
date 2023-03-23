import { yupResolver } from "@hookform/resolvers/yup";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Stack, useTheme } from "@mui/system";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { authApi } from "@/apis/auth";
// import { useStyles } from "./styles";
import { Button } from "@/components/Button";
import { Container, ContainerForm, Title } from "@/components/FormAuth";
import { InputText } from "@/components/InputText";
import { onError } from "@/configs/tanStackConfig";
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from "@/router";
import { ColorDark, ColorLight } from "@/types/Enum/color";
import { setCookiesUser } from "@/utils/auth";

import { RowForgot } from "./styles";

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
  const router = useRouter();
  const theme = useTheme();
  const route = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const submit = useMutation({
    mutationFn: async (data: IFormInput) =>
      await authApi.logIn(data.userName, data.password),
    onSuccess(data, variables, context) {
      setCookiesUser(data.data);
      route.push(PRIVATE_ROUTE.HOME);
    },
    onError,
  });

  const onSubmit: SubmitHandler<IFormInput> = async (value) => {
    const data = await submit.mutateAsync(value);
    setCookiesUser(data.data);
  };

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
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
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {!showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              sx={{
                color: ColorLight.WHITE,
              }}
              variant="contained"
              type="submit"
            >
              Sign In
            </Button>
            <RowForgot>
              <Button
                variant="text"
                type="button"
                sx={{ fontSize: 14 }}
                onClick={() => {
                  router.push(PUBLIC_ROUTE.FORGOT_PASSWORD);
                }}
              >
                Forgot Password!
              </Button>
            </RowForgot>
          </ContainerForm>
          <Divider sx={{ marginTop: "30px" }}>
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
