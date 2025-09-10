import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// create a custom hook to help me use the context
export const useTheme = () => useContext(ThemeContext);
