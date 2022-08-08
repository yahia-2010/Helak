import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";

const AllProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

export default AllProviders;
