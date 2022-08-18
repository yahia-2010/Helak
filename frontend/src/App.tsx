import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
