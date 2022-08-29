import React, { useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { AuthContext } from "./contexts/AuthContext";
import unprotectedRoutes from "./data/unprotectedRoutes";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const App: React.FC = () => {
  const { authValues } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!authValues.isAuth && !unprotectedRoutes.includes(location.pathname)) {
      navigate("/login");
    }
  }, [authValues.isAuth, location.pathname]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
