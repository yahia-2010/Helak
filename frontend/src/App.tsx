import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import FloatingButton from "./components/FloatingButton";
import { ThemeContext } from "./contexts/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const App: React.FC = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <Outlet />
      <FloatingButton
        icon={
          theme === "light" ? (
            <MoonIcon className="h-5" />
          ) : (
            <SunIcon className="h-5" />
          )
        }
        action={() => toggleTheme()}
      />
    </>
  );
};

export default App;
