import React, { useContext } from "react";
import AllProviders from "@/contexts/AllProviders";
import { ThemeContext } from "@/contexts/ThemeContext";

export const StorybookDefaultDecorators: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      dir="rtl"
      className={`h-screen w-full overflow-x-hidden overflow-y-scroll ${
        theme === "light" ? "p-8" : "p-0"
      } text-dark-primary`}
    >
      <AllProviders>{children}</AllProviders>
    </div>
  );
};
