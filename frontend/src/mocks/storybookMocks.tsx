import React from "react";

export const StorybookDarkMock: React.FC<{
  children: React.ReactNode;
  bgColor?: "primary" | "secondary";
}> = ({ children, bgColor = "primary" }) => {
  return (
    <div className="dark">
      <div
        className={`h-screen w-full ${
          bgColor === "primary" ? "bg-dark-primary" : "bg-dark-secondary"
        } p-8 text-dark-primary dark:text-white`}
      >
        {children}
      </div>
    </div>
  );
};
