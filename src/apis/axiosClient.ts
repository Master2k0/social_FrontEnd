import axios, { type AxiosError } from "axios";

import { type IResponseError } from "@/types/response";

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "Application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token && config.headers) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  async (error) => await Promise.reject(error.response.data)
);

axiosClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<IResponseError>) =>
    await Promise.reject(error.response?.data)
);
