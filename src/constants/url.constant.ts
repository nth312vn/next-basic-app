export enum RequestUrl {
  LOGIN = "/auth/login",
  REFRESH_TOKEN = "/auth/refresh-token",
  REGISTER = "/auth/register",
  SET_COOKIE = "api/auth/login/cookie",
  CLEAR_COOKIE = "api/auth/logout/cookie",
  LOG_OUT = "/auth/logout",
}
export const tokenExcludedRoutes = [
  RequestUrl.LOGIN,
  RequestUrl.REFRESH_TOKEN,
  RequestUrl.REGISTER,
  RequestUrl.SET_COOKIE,
];
export const apiIgnoreUnauthorized = [
  RequestUrl.REFRESH_TOKEN,
  RequestUrl.LOGIN,
  RequestUrl.REGISTER,
];
