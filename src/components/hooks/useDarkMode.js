import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = () => {
  const [storedValue, setValue] = useLocalStorage("thing", false);

  useEffect(() => {
    document.body.className = storedValue ? "dark-mode" : "";
  }, [storedValue]);

  return [storedValue, setValue];
};

export default useDarkMode;
