import { RequestUrl } from "@/constants/url.constant";
import axiosInstance from "@/lib/axios";
import { RefreshTokenResponse } from "@/types/auth.type";

export const refreshTokenService = (refreshToken: string) => {
  return axiosInstance.post<RefreshTokenResponse>(RequestUrl.REFRESH_TOKEN, {
    refreshToken,
  });
};
