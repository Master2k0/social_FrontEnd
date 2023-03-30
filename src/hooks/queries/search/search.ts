import { useQuery } from "@tanstack/react-query";

import { searchAPI } from "@/apis/search";
import { onError } from "@/configs/tanStackConfig";

export default function useSearch(keyword: string) {
  return useQuery({
    queryKey: ["search", keyword],
    queryFn: async () => await searchAPI.search(keyword),
    staleTime: 0,
    cacheTime: 0,
    onError,
    retry: 0,
    enabled: false,
  });
}
