import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./styles.css";
import { AuthProvider } from "./contexts/AuthContext";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import WhyKiwiPage from "./pages/WhyKiwiPage";
import ForSeniorsPage from "./pages/ForSeniorsPage";
import ForFacilitiesPage from "./pages/ForFacilitiesPage";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import WaitlistPage from "./pages/WaitlistPage";



/* ================================
   SCROLL TO TOP (HashRouter SAFE)
================================ */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppWrapper() {
  const location = useLocation();

  // Hide navbar and footer on login and dashboard pages
  const hideNavbarAndFooter =
    location.pathname === "/login" || location.pathname === "/dashboard";

  return (
    <>
      <ScrollToTop />

      {!hideNavbarAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/why-kiwi" element={<WhyKiwiPage />} />
        <Route path="/for-seniors" element={<ForSeniorsPage />} />
        <Route path="/for-facilities" element={<ForFacilitiesPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppWrapper />
      </Router>
    </AuthProvider>
  );
}
