import React from "react";
import { BrowserRouter } from "react-router-dom";

const AllProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AllProviders;
