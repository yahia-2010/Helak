import React from "react";
import AllProviders from "@/contexts/AllProviders";

export const StorybookDefaultDecorators: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div dir="rtl" className="overflow-x-hidden text-dark-primary">
      <AllProviders>{children}</AllProviders>
    </div>
  );
};
