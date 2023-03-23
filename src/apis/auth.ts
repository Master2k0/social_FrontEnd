import { type ILoginResponse } from "@/types/apis/auth";
import { type IUser } from "@/types/apis/user";
import { type IResponse } from "@/types/response";

import { axiosClient, axiosClientRefresh } from "./axiosClient";

const END_POINT = "/auth";

interface IFormRegister {
  userName: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const authApi = {
  logIn: async (userName: string, password: string) => {
    const response = await axiosClient.post<IResponse<ILoginResponse>>(
      `${END_POINT}/login`,
      {
        userName,
        password,
      }
    );
    return response.data;
  },
  register: async (formRegister: IFormRegister) => {
    const response = await axiosClient.post<IResponse<IUser>>(
      `${END_POINT}/register`,
      formRegister
    );
    return response.data;
  },
  verifyEmail: async (token: string) => {
    const response = await axiosClient.post<IResponse<IUser>>(
      `${END_POINT}/verify-email`,
      {
        token,
      }
    );
    return response.data;
  },
  requestForgotPassword: async (email: string) => {
    const response = await axiosClient.post<IResponse<IUser>>(
      `${END_POINT}/forgot-password`,
      {
        email,
      }
    );
    return response.data;
  },

  resetPassword: async (
    token: string,
    password: string,
    confirmPassword: string
  ) => {
    const response = await axiosClient.post<IResponse<IUser>>(
      `${END_POINT}/reset-password`,
      {
        token,
        password,
        confirmPassword,
      }
    );
    return response.data;
  },

  refreshToken: async () => {
    const response = await axiosClientRefresh.get<IResponse<ILoginResponse>>(
      `${END_POINT}/refresh`
    );
    return response.data;
  },

  logout: async () => {
    const response = await axiosClient.get<IResponse<any>>(
      `${END_POINT}/logout`
    );
    return response.data;
  },
};
