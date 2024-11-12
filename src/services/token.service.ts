import axiosInstance from "@/lib/axios";
import { AxiosResponse } from "axios";

export const refreshTokenService = (token: string) => {
  return axiosInstance.post<string>("refresh", {
    token,
  });
};
