import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { authApi } from "@/apis/auth";
import { type IResponseError } from "@/types/response";

export default function VerifyEmailContainer() {
  const router = useRouter();
  const { token } = router.query;
  const [message, setMessage] = useState<string>("Verify Email");
  useEffect(() => {
    if (!token) {
      return;
    }
    const handleVerifyEmail = async () => {
      try {
        const response = await authApi.verifyEmail(token as string);
        setMessage(response.message);
      } catch (err) {
        if (err as IResponseError) {
          setMessage((err as IResponseError).message);
        } else {
          setMessage("Verify Email Failed");
        }
      } finally {
        setTimeout(() => {
          router.push("/auth");
        }, 2000);
      }
    };
    handleVerifyEmail();
  }, [token]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography fontSize={80}>{message}</Typography>
    </Box>
  );
}
