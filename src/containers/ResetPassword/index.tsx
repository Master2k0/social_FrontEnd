import { yupResolver } from "@hookform/resolvers/yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, useTheme } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Button } from "@/components/Button";
import { Container, ContainerForm, Title } from "@/components/FormAuth";
import { InputText } from "@/components/InputText";
import { ColorLight } from "@/types/Enum/color";

import { Layout } from "./styles";

interface IFormInput {
  newPassword: string;
  confirmPassword: string;
}

const schema = yup.object({
  newPassword: yup.string().required("Password not empty"),
  confirmPassword: yup
    .string()
    .required("Confirm Password not empty")
    .oneOf([yup.ref("newPassword"), ""], "Passwords must match"),
});

const onSubmit = (value: any) => {
  console.log(value);
};

export default function ResetPasswordContainer() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const theme = useTheme();
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
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Title sx={{ marginBottom: theme.spacing(10) }}>Reset Password</Title>
          <ContainerForm spacing={7}>
            <InputText
              {...register("newPassword", { required: true })}
              label="Password"
              variant="outlined"
              error={!!errors.newPassword}
              helperText={errors.newPassword?.message}
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
              Submit
            </Button>
          </ContainerForm>
        </Container>
      </form>
    </Layout>
  );
}
