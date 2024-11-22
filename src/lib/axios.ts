import {
  apiIgnoreUnauthorized,
  RequestUrl,
  tokenExcludedRoutes,
} from "@/constants/url.constant";
import { clearCookieService, setCookieService } from "@/services/auth.service";
import { refreshTokenService } from "@/services/token.service";

import {
  clearSession,
  getAccessToken,
  getRefreshToken,
  setNewSession,
} from "@/utils/session.util";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
interface CustomAxiosInstance
  extends Omit<AxiosInstance, "get" | "post" | "put" | "delete" | "patch"> {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
}

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (config.url && tokenExcludedRoutes.includes(config.url as RequestUrl))
      return config;
    if (window !== undefined) {
      const accessToken = getAccessToken();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (
      error.status === HttpStatusCode.Unauthorized &&
      !originalRequest._retry &&
      !apiIgnoreUnauthorized.includes(originalRequest.url as RequestUrl)
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = getRefreshToken();
        if (!refreshToken) return Promise.reject(error);
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          await refreshTokenService(refreshToken);
        setNewSession(newAccessToken, newRefreshToken);
        await setCookieService(newAccessToken, newRefreshToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        await clearCookieService();
        clearSession();
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
export default axiosInstance as CustomAxiosInstance;
