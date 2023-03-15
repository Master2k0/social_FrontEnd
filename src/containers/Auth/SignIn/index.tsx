import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Input,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
// import { useStyles } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Title } from "./styles";
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
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  // const classes = useStyles();
  const onSubmit = (value: any) => {
    console.log(value);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container spacing={2}>
        <Title>Account Login</Title>
        <TextField
          {...register("userName", { required: true })}
          label="User Name"
          variant="outlined"
          error={!!errors.userName}
          helperText={errors.userName?.message}
        />
        <TextField
          {...register("password", { required: true })}
          label="Pass Word"
          variant="outlined"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Box>
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
        </Box>
        <Button variant="outlined" type="submit">
          Sign In
        </Button>
      </Container>
    </form>
  );
}

export default SignIn;
