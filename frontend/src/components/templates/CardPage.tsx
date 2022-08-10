import { ThemeContext } from "@/contexts/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import React, { useContext } from "react";
import FloatingButton from "../FloatingButton";

const CardPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <>
      <section className="center flex h-full min-h-screen w-full overflow-hidden">
        <div className="center flex h-full min-h-screen w-full rounded bg-white p-5 shadow-md dark:bg-dark-primary xs:h-fit xs:min-h-fit xs:w-fit">
          <div className="w-fit">{children}</div>
        </div>
      </section>
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

export default CardPage;
