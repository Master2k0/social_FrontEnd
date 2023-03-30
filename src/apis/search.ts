import { axiosClient } from "@/apis/axiosClient";
import { type ISearch } from "@/types/apis/search";
import { type IResponse } from "@/types/response";

const END_POINT = "/users";

export const searchAPI = {
  search: async (keyword: string) => {
    const response = await axiosClient.get<IResponse<ISearch[]>>(
      `${END_POINT}/search`,
      {
        params: { keyword },
      }
    );
    return response.data;
  },
};
