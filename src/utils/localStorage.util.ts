export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) || "")
    : null;
};
export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const removeLocalStorage = (key: string) => localStorage.removeItem(key);
export const clearLocalStorage = () => localStorage.clear();
