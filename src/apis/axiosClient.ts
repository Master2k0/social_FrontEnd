import axios, { type AxiosError } from "axios";
import Cookies from "universal-cookie";

import { type IResponseError } from "@/types/response";

const cookies = new Cookies();

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "Application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = cookies.get("accessToken") as string;
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

export const axiosClientRefresh = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "Application/json",
  },
});

axiosClientRefresh.interceptors.request.use(
  (config) => {
    const refreshToken = cookies.get("refreshToken") as string;
    if (refreshToken && config.headers) {
      config.headers.authorization = `Bearer ${refreshToken}`;
    }
    return config;
  },
  async (error) => await Promise.reject(error.response.data)
);

axiosClientRefresh.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<IResponseError>) =>
    await Promise.reject(error.response?.data)
);
