import React from "react";
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./styles.css";
import { AuthProvider } from "./contexts/AuthContext";
import { FormspreeProvider } from "@formspree/react";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import WhyKiwiPage from "./pages/WhyKiwiPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function AppWrapper() {
  const location = useLocation();

  // Hide navbar & footer only on login + dashboard
  const hideNavbarAndFooter =
    location.pathname === "/login" || location.pathname === "/dashboard";

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}

      <Routes>
        {/* Correct landing page */}
        <Route path="/" element={<HomePage />} />

        <Route path="/why-kiwi" element={<WhyKiwiPage />} />
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

        {/* Redirect all unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      {/* Formspree provider wraps the entire app */}
      <FormspreeProvider project="xqaryyab">
        <Router>
          <AppWrapper />
        </Router>
      </FormspreeProvider>
    </AuthProvider>
  );
}
