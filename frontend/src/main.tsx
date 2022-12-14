// React
import React from "react";
import ReactDOM from "react-dom/client";

// Router
import { Routes, Route } from "react-router-dom";

// App
import App from "./App";

// Pages
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Helak from "./pages/Helak";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Halaka from "./pages/Halaka";

// Contexts
import AllProviders from "./contexts/AllProviders";

// Styles
import "@/styles/index.css";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AllProviders>
      <div className="relative h-full min-h-screen w-full bg-gray-100 text-dark-primary dark:bg-dark-secondary dark:text-white">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="helak" element={<Helak />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
            <Route path="halaka" element={<Halaka />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<ErrorPage status={404} />} />
        </Routes>
      </div>
    </AllProviders>
  </React.StrictMode>
);
