import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

import { authApi } from "@/apis/auth";
import { PRIVATE_ROUTE } from "@/router";
import { setCookiesUser } from "@/utils/auth";

function useLogin() {
  const router = useRouter();
  const redirectGithub = () => {
    const winOpen = window.open(
      `${process.env.NEXT_PUBLIC_GITHUB_URL ?? ""}${
        process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID ?? ""
      }&scope=read:user%20user:email&redirect_uri=${
        process.env.NEXT_PUBLIC_GITHUB_REDIRECT ?? ""
      }`,
      "_blank",
      "width=500, height=500"
    );

    const timer = setInterval(() => {
      if (winOpen?.closed) {
        clearInterval(timer);
        const redirect = document.createElement("a");
        redirect.href = PRIVATE_ROUTE.HOME || "";
        redirect.click();
      }
    }, 1000);
  };

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (response) => {
      const data = await authApi.signInWithGoogle(response.code);
      setCookiesUser(data.data);
      router.push(PRIVATE_ROUTE.HOME);
    },
    onError: (err) => {
      enqueueSnackbar(err.error, {
        variant: "error",
      });
    },
  });

  const discordLogin = () => {
    const winOpen = window.open(
      process.env.NEXT_PUBLIC_DISCORD_CREATE_URL,
      "_blank",
      "width=500, height=500"
    );

    const timer = setInterval(() => {
      if (winOpen?.closed) {
        clearInterval(timer);
        const redirect = document.createElement("a");
        redirect.href = PRIVATE_ROUTE.HOME || "";
        redirect.click();
      }
    }, 1000);
  };

  return { redirectGithub, googleLogin, discordLogin };
}

export default useLogin;
