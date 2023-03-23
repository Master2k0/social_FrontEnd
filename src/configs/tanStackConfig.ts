import { QueryClient } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";

import { type IResponse, type IResponseError } from "@/types/response";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 5,
      keepPreviousData: true, // keep previous data while refetching
    },
  },
});

export default queryClient;

export function onError(error: IResponseError) {
  enqueueSnackbar(error.message, {
    variant: "error",
  });
}

export function onSuccess<T, I>(data: IResponse<T>) {
  enqueueSnackbar(data.message, {
    variant: "success",
  });
}
