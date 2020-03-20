import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  if (window.loaclStorage && window.localStorage.getItem(key)) {
    initialValue = JSON.parse(window, localStorage.getItem(key));
  }
  const [value, setStoredValue] = useState(() => {
    const val = window.localStorage.getItem(key);
    return val ? JSON.parse(val) : initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, setValue];
}
