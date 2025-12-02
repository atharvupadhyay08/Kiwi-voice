import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Enter email and password");

    login({ email });
    navigate('/dashboard');
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>

        {/* Kiwi Logo + Title */}
        <div style={styles.header}>
          <span style={styles.emoji}>🥝</span>
          <h2 style={styles.title}>Welcome to Kiwi</h2>
          <p style={styles.subtitle}>Smart care, made simple.</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.footerText}>
          Forgot password? <span style={styles.link}>Reset</span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #e8ffe4, #c7f7cd, #a7efb9)",
    padding: "20px",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "#ffffff",
    padding: "45px 35px",
    borderRadius: "18px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
    textAlign: "center",
  },

  header: {
    marginBottom: "25px",
  },

  emoji: {
    fontSize: "55px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginTop: "10px",
    color: "#1b3a2a",
  },

  subtitle: {
    color: "#608069",
    fontSize: "14px",
    marginTop: "4px",
  },

  input: {
    width: "100%",
    padding: "14px 16px",
    margin: "10px 0",
    borderRadius: "10px",
    border: "1px solid #c7d7cc",
    fontSize: "15px",
    outline: "none",
    transition: "0.2s",
  },

  button: {
    width: "100%",
    padding: "14px",
    marginTop: "15px",
    background: "#47b567",
    color: "#fff",
    border: "none",
    fontSize: "17px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
  },

  footerText: {
    marginTop: "18px",
    fontSize: "14px",
    color: "#6c7a72",
  },

  link: {
    color: "#2e9b52",
    fontWeight: "600",
    cursor: "pointer",
  },
};
