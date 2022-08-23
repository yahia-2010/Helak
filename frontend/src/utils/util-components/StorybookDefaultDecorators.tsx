import React from "react";
import AllProviders from "@/contexts/AllProviders";

export const StorybookDefaultDecorators: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div
      dir="rtl"
      className="h-screen w-full overflow-x-hidden overflow-y-scroll text-dark-primary"
    >
      <AllProviders>{children}</AllProviders>
    </div>
  );
};
