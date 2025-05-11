import React from 'react';
import { UseShips } from '../../contexts/ShipsContext';
import { UseJobs } from '../../contexts/JobsContext';
import { UseComponents } from '../../contexts/ComponentsContext';
import '../../styles/KPICards.css';

const KPICards = () => {
  const { ships } = UseShips();
  const { jobs } = UseJobs();
  const { components } = UseComponents();

  const totalShips = ships.length;
  const now = new Date();
  const OVERDUE_DAYS = 180;
  const overdueComponents = components.filter(c => {
    if (!c.lastMaintenanceDate) return true; 
    const lastDate = new Date(c.lastMaintenanceDate);
    const diffDays = (now - lastDate) / (1000 * 60 * 60 * 24);
    return diffDays > OVERDUE_DAYS;
  });
  const totalOverdueComponents = overdueComponents.length;

  const jobsInProgress = jobs.filter(j => j.status && j.status.toLowerCase() === 'in progress').length;
  const jobsCompleted = jobs.filter(j => j.status && j.status.toLowerCase() === 'completed').length;

  return (
    <div className="kpi-cards-container">
      <div className="kpi-card">
        <div className="kpi-title">Total Ships</div>
        <div className="kpi-value">{totalShips}</div>
      </div>
      <div className="kpi-card">
        <div className="kpi-title">Components Overdue (Maintainence)</div>
        <div className="kpi-value">{totalOverdueComponents}</div>
      </div>
      <div className="kpi-card">
        <div className="kpi-title">Jobs In Progress</div>
        <div className="kpi-value">{jobsInProgress}</div>
      </div>
      <div className="kpi-card">
        <div className="kpi-title">Jobs Completed</div>
        <div className="kpi-value">{jobsCompleted}</div>
      </div>
    </div>
  );
};

export default KPICards;
