import { useRouter } from "next/router";
import { type ReactNode, useEffect } from "react";

import useAuth from "@/hooks/useAuth";
import { PUBLIC_ROUTE } from "@/router";

const PrivateRoute = (Component: ReactNode) => () => {
  const { isAuth } = useAuth();
  const { push } = useRouter();
  useEffect(() => {
    if (!isAuth) {
      push(PUBLIC_ROUTE.AUTH);
    }
  }, []);
  return Component;
};
export default PrivateRoute;
