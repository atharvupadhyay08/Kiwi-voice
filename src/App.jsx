import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./styles.css";
import { AuthProvider } from './contexts/AuthContext';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import HomePage from "./pages/HomePage";
import WhyKiwiPage from "./pages/WhyKiwiPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from './components/ProtectedRoute';

function AppWrapper() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === "/login" || location.pathname === "/dashboard";

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}

      <Routes>
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
