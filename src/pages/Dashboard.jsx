import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome, {user.name}!</h1>
      <p>This is your Kiwi dashboard.</p>
      <button onClick={logout} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Logout
      </button>
    </div>
  );
}
