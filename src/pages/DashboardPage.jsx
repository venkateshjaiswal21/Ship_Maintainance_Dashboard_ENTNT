import React from 'react';
import { UseAuth } from '../contexts/AuthContext';
import '../styles/DashboardPage.css';
import DashboardNav from '../components/Dashboard/DashboardNav';
import JobCalendar from '../components/Jobs/JobCalendar';
import KPICards from '../components/Dashboard/KPICards';
import Charts from '../components/Dashboard/Charts';
const DashboardPage = () => {
  const { user, logout } = UseAuth();

  return (
    <div className="dashboard-page-container">
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
      <DashboardNav />
      <br />
      <KPICards />
      <br />
      <Charts />
      <br />
      <div className="dashboard-content">
        <h2>Welcome, {user.name}</h2>
        <div className="dashboard-section">
          <h3>Maintenance Calendar</h3>
          <JobCalendar />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
