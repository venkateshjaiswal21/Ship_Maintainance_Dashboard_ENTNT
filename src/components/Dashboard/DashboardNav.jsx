import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/DashboardNav.css';

const DashboardNav = () => {
  return (
    <nav className="dashboard-nav">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Dashboard
      </NavLink>
      <NavLink to="/ships" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Ships
      </NavLink>
      <NavLink to="/jobs" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Jobs
      </NavLink>
    </nav>
  );
};

export default DashboardNav; 