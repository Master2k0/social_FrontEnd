import { useEffect } from "react";

import { PRIVATE_ROUTE } from "@/router";

function useLogin() {
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

  return { redirectGithub };
}

export default useLogin;
