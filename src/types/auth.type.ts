export interface LoginServiceResponse {
  accessToken: string;
  refreshToken: string;
}
export interface RegisterServiceParams {
  name: string;
  email: string;
  password: string;
}
export interface RegisterServiceResponse {
  message: string;
}
export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}
