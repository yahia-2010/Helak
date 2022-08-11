import { ThemeContext } from "@/contexts/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import React, { useContext } from "react";
import FloatingButton from "../FloatingButton";

const CardPage: React.FC<{ children: React.ReactNode; [x: string]: any }> = (
  props
) => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { children } = props;

  return (
    <section className="center flex h-full min-h-screen w-full">
      <div
        className={`${
          (props as any).className
        } center flex h-full min-h-screen w-full rounded bg-white p-5 shadow-md dark:bg-dark-primary xs:h-fit xs:min-h-fit xs:w-fit`}
      >
        <div className="w-fit overflow-hidden">{children}</div>
      </div>
    </section>
  );
};

export default CardPage;
