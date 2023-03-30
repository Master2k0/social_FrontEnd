import { type IUser } from "@/types/apis/user";
import { type IResponse } from "@/types/response";

import { axiosClient } from "./axiosClient";

const END_POINT = "/users";

export const userAPI = {
  me: async () => {
    const response = await axiosClient.get<IResponse<IUser>>(`${END_POINT}/me`);
    return response.data;
  },
};
