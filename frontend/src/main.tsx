import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/Login";
import AllProviders from "./contexts/AllProviders";
import "@/styles/index.css";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AllProviders>
      <div className="w-full h-full min-h-screen bg-white dark:bg-dark-secondary text-dark-primary dark:text-white">
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage status={404} />} />
        </Routes>
      </div>
    </AllProviders>
  </React.StrictMode>
);
