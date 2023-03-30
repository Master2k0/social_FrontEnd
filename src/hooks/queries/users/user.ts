import { useQuery } from "@tanstack/react-query";

import { userAPI } from "@/apis/user";
import { onError } from "@/configs/tanStackConfig";

export default function useUserGetMe() {
  return useQuery(["user"], userAPI.me, {
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 10,
    onError,
    retry: 0,
  });
}
