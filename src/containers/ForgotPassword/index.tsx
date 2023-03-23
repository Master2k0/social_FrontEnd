import { yupResolver } from "@hookform/resolvers/yup";
import { Typography, useTheme } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { authApi } from "@/apis/auth";
import { Button } from "@/components/Button";
import { Container, ContainerForm, Title } from "@/components/FormAuth";
import { InputText } from "@/components/InputText";
import { Text } from "@/components/Text";
import { ColorLight } from "@/types/Enum/color";
import { type IResponseError } from "@/types/response";

import { Layout } from "./styles";

interface IFormInput {
  email: string;
}

const schema = yup.object({
  email: yup.string().email().required("Email not empty"),
});

export default function ForgotPasswordContainer() {
  const [message, setMessage] = useState<string>("");
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const submit = useMutation({
    mutationFn: async (value: IFormInput) =>
      await authApi.requestForgotPassword(value.email),
    onError: (error: IResponseError) => {
      setError(
        "email",
        { type: "focus", message: error.message },
        { shouldFocus: true }
      );
    },
    onSuccess: (data, variables, context) => {
      setMessage(
        "Request success, check your email, email will be expired in 10 minutes"
      );
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (value) => {
    submit.mutateAsync(value);
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Title sx={{ marginBottom: theme.spacing(10) }}>
            Forgot Password?
          </Title>
          <ContainerForm spacing={7}>
            <Text>
              Don&#39;t worry!, It happens. Please enter the address associated
              with your account
            </Text>
            <InputText
              {...register("email", { required: true })}
              label="Your Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
              inputRef={(input) => input?.focus()}
              autoComplete="off"
            />
            {message && <Typography>{message}</Typography>}

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
