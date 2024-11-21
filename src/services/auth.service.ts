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
export const setCookieService = (accessToken: string) => {
  return axiosInstance.post(
    RequestUrl.SET_COOKIE,
    {
      accessToken,
    },
    {
      baseURL: "",
    }
  );
};
export const logoutService = (refreshToken: string) => {
  return axiosInstance.post(RequestUrl.LOG_OUT, {
    token: refreshToken,
  });
};
