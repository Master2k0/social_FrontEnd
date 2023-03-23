import { yupResolver } from "@hookform/resolvers/yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, useTheme } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { authApi } from "@/apis/auth";
import { Container, ContainerForm, Title } from "@/components/FormAuth";
import { InputText } from "@/components/InputText";
import { LoadingButtonCustom } from "@/components/LoadingButton";
import { onError, onSuccess } from "@/configs/tanStackConfig";
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

export default function ResetPasswordContainer() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const theme = useTheme();
  const router = useRouter();
  const { token } = router.query;

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

  const submit = useMutation({
    mutationFn: async (value: IFormInput) =>
      await authApi.resetPassword(
        (token as string) ?? "",
        value.newPassword,
        value.confirmPassword
      ),
    onError,
    onSuccess,
  });

  const onSubmit: SubmitHandler<IFormInput> = async (value) => {
    await submit.mutateAsync(value);
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
            <LoadingButtonCustom
              sx={{
                color: ColorLight.WHITE,
              }}
              variant="contained"
              type="submit"
              disableRipple
              loading={submit.isLoading}
            >
              Submit
            </LoadingButtonCustom>
          </ContainerForm>
        </Container>
      </form>
    </Layout>
  );
}
