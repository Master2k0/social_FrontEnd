import { useRouter } from "next/router";
import { useState } from "react";

import { authApi } from "@/apis/auth";
import { PUBLIC_ROUTE } from "@/router";
import { checkIsAuth, removeCookiesUser } from "@/utils/auth";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean>(checkIsAuth());
  const router = useRouter();
  const logOut = async () => {
    await authApi.logout();
    setIsAuth(false);
    removeCookiesUser();
    router.push(PUBLIC_ROUTE.AUTH);
  };

  return { isAuth, setIsAuth, logOut };
};

export default useAuth;
