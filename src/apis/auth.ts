import { type IResponse } from "@/types/response";

import { axiosClient } from "./axiosClient";

const END_POINT = "/auth";
export const authApi = {
  logIn: async () => {},
  verifyEmail: async (token: string) => {
    const response = await axiosClient.post<IResponse<any>>(
      `${END_POINT}/verify-email`,
      {
        token,
      }
    );
    return response.data;
  },
  requestForgotPassword: async (email: string) => {
    const response = await axiosClient.post<IResponse<any>>(
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
    const response = await axiosClient.post<IResponse<any>>(
      `${END_POINT}/reset-password`,
      {
        token,
        password,
        confirmPassword,
      }
    );
    return response.data;
  },
};
