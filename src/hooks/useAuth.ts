import { useState } from "react";

import { checkIsAuth, removeCookiesUser } from "@/utils/auth";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean>(checkIsAuth());

  const logOut = () => {
    setIsAuth(false);
    removeCookiesUser();
    // Call API log out
    // something missing here
  };

  return { isAuth, setIsAuth, logOut };
};

export default useAuth;
