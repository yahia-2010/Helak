import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import AllProviders from "./contexts/AllProviders";
import "@/styles/index.css";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AllProviders>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </AllProviders>
  </React.StrictMode>
);
