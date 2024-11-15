import { localStorageKeys } from "@/constants/localStorage.constant";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "./localStorage.util";

export const setNewAccessToken = (token: string) => {
  const session = getLocalStorage(localStorageKeys.SESSION);
  const newSession = { ...session, accessToken: token };
  setLocalStorage(localStorageKeys.SESSION, newSession);
};
export const clearSession = () => {
  removeLocalStorage(localStorageKeys.SESSION);
};
export const getAccessToken = () => {
  const session = getLocalStorage(localStorageKeys.SESSION);
  return session.accessToken;
};
export const getRefreshToken = () => {
  const session = getLocalStorage(localStorageKeys.SESSION);
  return session.refreshToken;
};
