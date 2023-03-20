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
};
