import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";

import { authApi } from "@/apis/auth";
import { type IDecodeToken, type ILoginResponse } from "@/types/apis/auth";

const cookies = new Cookies();

export const getCookiesUser = () => {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");
  return { accessToken, refreshToken };
};

export const setCookiesUser = (data: ILoginResponse) => {
  const { accessToken, refreshToken } = data;
  const { exp: expAToken }: IDecodeToken = jwtDecode(accessToken || "");
  const { exp: expRToken }: IDecodeToken = jwtDecode(refreshToken || "");
  cookies.set("accessToken", accessToken, {
    path: "/",
    expires: new Date(expAToken * 1000),
  });
  cookies.set("refreshToken", refreshToken, {
    path: "/",
    expires: new Date(expRToken * 1000),
  });
};

export const removeCookiesUser = () => {
  cookies.remove("accessToken", { path: "/" });
  cookies.remove("refreshToken", { path: "/" });
};

export const checkIsAuth = () => {
  const { accessToken } = getCookiesUser();
  if (!accessToken) {
    return requestRefreshToken();
  }
  return true;
};

export const requestRefreshToken = () => {
  const { refreshToken } = getCookiesUser();
  if (!refreshToken) {
    return false;
  }
  // Call API refresh token
  try {
    authApi.refreshToken().then((res) => {
      setCookiesUser(res.data);
    });
  } catch (e) {
    return false;
  }
  return true;
};
