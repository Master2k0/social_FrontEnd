import { yupResolver } from "@hookform/resolvers/yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, IconButton, InputAdornment, Link } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Button } from "@/components/Button";
import { Container, ContainerForm, Title } from "@/components/FormAuth";
import { InputText } from "@/components/InputText";
import { Text } from "@/components/Text";
import { ColorLight } from "@/types/Enum/color";

interface IFormInput {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

const schema = yup.object({
  email: yup.string().email().required("Email not empty"),
  userName: yup.string().required("User Name not empty"),
  password: yup.string().required("Password not empty"),
  confirmPassword: yup
    .string()
    .required("Confirm Password not empty")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
  firstName: yup.string().required("First Name not empty"),
  lastName: yup.string().required("Last Name not empty"),
});

const onSubmit = (value: any) => {
  console.log(value);
};

function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
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
          <Title>Create your Account!</Title>
          <ContainerForm spacing={7}>
            <InputText
              {...register("firstName", { required: true })}
              label="First Name"
              variant="outlined"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              inputRef={(input) => input?.focus()}
              autoComplete="off"
            />
            <InputText
              {...register("lastName", { required: true })}
              label="Last Name"
              variant="outlined"
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
            <InputText
              {...register("email", { required: true })}
              label="Your Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <InputText
              {...register("userName", { required: true })}
              label="Username"
              variant="outlined"
              error={!!errors.userName}
              helperText={errors.userName?.message}
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
            <InputText
              {...register("confirmPassword", { required: true })}
              label="Confirm Password"
              variant="outlined"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
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
              disableRipple
            >
              Sign Up
            </Button>
            <Text>
              You`&apos;`ll receive a confirmation email in your inbox with a
              link to activate your account. If you have any problems,{" "}
              <Link underline="none" href="google.com">
                contact us
              </Link>
              !
            </Text>
          </ContainerForm>
        </Container>
      </form>
    </Box>
  );
}

export default SignUp;
