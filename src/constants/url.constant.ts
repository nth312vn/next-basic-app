export enum RequestUrl {
  LOGIN = "/auth/login",
  REFRESH_TOKEN = "/refresh",
  REGISTER = "/auth/register",
  SET_COOKIE = "api/auth/login/cookie",
}
export const tokenExcludedRoutes = [
  RequestUrl.LOGIN,
  RequestUrl.REFRESH_TOKEN,
  RequestUrl.REGISTER,
  RequestUrl.SET_COOKIE,
];
