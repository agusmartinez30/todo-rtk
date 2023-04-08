export const persistLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
