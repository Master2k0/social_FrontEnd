import { useEffect, useState } from "react";

import useUserGetMe from "@/hooks/queries/users/user";
import { requestRefreshToken } from "@/utils/auth";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const { data, refetch, isLoading } = useUserGetMe();
  useEffect(() => {
    const checkAuth = async () => {
      if (!isLoading && !data) {
        const isRefresh = await requestRefreshToken();
        if (isRefresh) {
          refetch();
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } else {
        setIsAuth(true);
      }
    };

    checkAuth();
  }, [isLoading]);

  return { isAuth, setIsAuth };
};

export default useAuth;
