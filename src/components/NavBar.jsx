import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Kiwi</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/why-kiwi">Why Kiwi</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login" className="button-primary" style={{ padding: "8px 18px", borderRadius: "6px" }}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
