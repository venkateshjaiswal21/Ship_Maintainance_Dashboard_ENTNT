import React from 'react';
import { UseAuth } from '../contexts/AuthContext';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
  const { user, logout } = UseAuth();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Ship Maintenance Dashboard</h2>
        <div className="user-info">
          <span>Welcome, {user.name}</span>
          <span className="role-badge">{user.role}</span>
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        {user.role === 'admin' && (
          <div className="admin-section">
            <h2>Admin Controls</h2>
            <p>Welcome to the admin dashboard. You have full access to all features.</p>
          </div>
        )}

        {user.role === 'engineer' && (
          <div className="engineer-section">
            <h2>Engineer Dashboard</h2>
            <p>Welcome to the engineer dashboard. You can view and update maintenance tasks.</p>
          </div>
        )}

        {user.role === 'inspector' && (
          <div className="inspector-section">
            <h2>Inspector Dashboard</h2>
            <p>Welcome to the inspector dashboard. You can review and approve maintenance work.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
