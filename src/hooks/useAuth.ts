"use client";
import { useLocalStorage } from "react-use";

export default function useAuth() {
  const [value, setValue, remove] = useLocalStorage("session", {
    accessToken: "",
    refreshToken: "",
  });
  const login = (accessToken: string, refreshToken: string) => {
    setValue({
      accessToken,
      refreshToken,
    });
  };
  const logout = () => {
    remove();
  };
  return {
    value,
    login,
    logout,
  };
}
