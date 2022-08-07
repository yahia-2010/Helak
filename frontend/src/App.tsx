import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/layout/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
