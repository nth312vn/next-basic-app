export enum RequestUrl {
  LOGIN = "/login",
  REFRESH_TOKEN = "/refresh",
  REGISTER = "/register",
}
export const tokenExcludedRoutes = [
  RequestUrl.LOGIN,
  RequestUrl.REFRESH_TOKEN,
  RequestUrl.REGISTER,
];
