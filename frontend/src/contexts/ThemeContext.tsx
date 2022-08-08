/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

export type Theme = "light" | "dark";

export interface ThemeContextInterface {
  theme: Theme;
  toggleTheme: () => void;
}

const defaultTheme: Theme = "light";

const defaultThemeContextValue: ThemeContextInterface = {
  theme: defaultTheme,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextInterface>(
  defaultThemeContextValue
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { get, set, remove } = useLocalStorage();
  const [theme, setTheme] = useState<Theme>(
    (get("theme") as Theme) || defaultTheme
  );

  const toggleTheme = () => {
    if (get("theme") === "light") {
      set("theme", "dark");
    } else if (get("theme") === "dark") {
      set("theme", "light");
    } else {
      set("theme", defaultTheme);
    }
    setTheme(get("theme") as Theme);
  };

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
