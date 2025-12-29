import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="nav-logo">
          🐦 Kiwi
        </Link>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          role="button"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/why-kiwi" onClick={() => setOpen(false)}>Why Kiwi</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

          {/* Login Button */}
          <a
            href="http://app.kiwivoiceassistant.com"
            className="nav-btn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Login
          </a>
        </div>

      </div>
    </nav>
  );
}
