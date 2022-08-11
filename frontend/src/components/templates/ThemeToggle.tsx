import { ThemeContext } from "@/contexts/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import React, { useContext } from "react";
import FloatingButton from "../FloatingButton";

const ThemeToggle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <>
      {children}
      <FloatingButton
        className="hidden xs:flex"
        icon={
          theme === "light" ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )
        }
        action={() => toggleTheme()}
      />
    </>
  );
};

export default ThemeToggle;
