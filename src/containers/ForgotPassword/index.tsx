import { yupResolver } from "@hookform/resolvers/yup";
import { Box, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Button } from "@/components/Button";
import { Container, ContainerForm, Title } from "@/components/FormAuth";
import { InputText } from "@/components/InputText";
import { Text } from "@/components/Text";
import { ColorLight } from "@/types/Enum/color";

import { Layout } from "./styles";

interface IFormInput {
  email: string;
}

const schema = yup.object({
  email: yup.string().email().required("Email not empty"),
});

const onSubmit = (value: any) => {
  console.log(value);
};

export default function ForgotPasswordContainer() {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
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
