// import useLocalStorage from "./useLocalStorage";

// export function useDarkMode(key, initialValues, cb) {
//   // inputs = state and handleChanges
//   const [values, setValues] = useLocalStorage(key, initialValues);
//   const handleChanges = e => {
//     // e.preventDefault();
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };
//   // form/buttons = submit and clear
//   const clearForm = () => {
//     setValues(initialValues);
//   };

//   const handleSubmit = e => {
//     // e.preventDefault();
//     cb();
//     clearForm();
//   };

//   return [values, handleChanges, clearForm, handleSubmit];
// }

import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("UI");

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
