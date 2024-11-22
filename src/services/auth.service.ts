import { RequestUrl } from "@/constants/url.constant";
import axiosInstance from "@/lib/axios";
import {
  LoginServiceResponse,
  RegisterServiceParams,
  RegisterServiceResponse,
} from "@/types/auth.type";
import axios from "axios";

export const LoginService = (email: string, password: string) => {
  return axiosInstance.post<LoginServiceResponse>(RequestUrl.LOGIN, {
    email,
    password,
  });
};
export const registerService = (params: RegisterServiceParams) => {
  return axiosInstance.post<RegisterServiceResponse>(
    RequestUrl.REGISTER,
    params
  );
};
export const setCookieService = (accessToken: string, refreshToken: string) => {
  return axiosInstance.post(
    RequestUrl.SET_COOKIE,
    {
      accessToken,
      refreshToken,
    },
    {
      baseURL: "",
    }
  );
};
export const clearCookieService = () => {
  return axiosInstance.post(RequestUrl.CLEAR_COOKIE, null, {
    baseURL: "",
  });
};
export const logoutService = () => {
  return axiosInstance.post(RequestUrl.LOG_OUT);
};
