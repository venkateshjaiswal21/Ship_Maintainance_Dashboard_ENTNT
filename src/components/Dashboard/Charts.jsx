import React, { useMemo, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from 'chart.js';
import { UseJobs } from '../../contexts/JobsContext';
import { UseComponents } from '../../contexts/ComponentsContext';
import '../../styles/Charts.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

const Charts = () => {
  const { jobs } = UseJobs();
  const { components } = UseComponents();

  const jobsByStatus = useMemo(() => {
    const statusCounts = jobs.reduce((acc, job) => {
      const status = job.status ? job.status.toLowerCase() : 'unknown';
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});
    return {
      labels: Object.keys(statusCounts),
      datasets: [{
        label: 'Jobs by Status',
        data: Object.values(statusCounts),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderWidth: 1,
      }],
    };
  }, [jobs]);

  const jobsCompletedOverTime = useMemo(() => {
    const now = new Date();
    const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 6, 1);
    const completedJobs = jobs.filter(job => job.status && job.status.toLowerCase() === 'completed' && new Date(job.completedDate) >= sixMonthsAgo);
    const monthlyData = Array(6).fill(0);
    completedJobs.forEach(job => {
      const jobDate = new Date(job.completedDate);
      const monthIndex = (jobDate.getFullYear() - sixMonthsAgo.getFullYear()) * 12 + jobDate.getMonth() - sixMonthsAgo.getMonth();
      if (monthIndex >= 0 && monthIndex < 6) {
        monthlyData[monthIndex]++;
      }
    });
    const labels = Array.from({ length: 6 }, (_, i) => {
      const date = new Date(sixMonthsAgo);
      date.setMonth(date.getMonth() + i);
      return date.toLocaleString('default', { month: 'short' });
    });
    return {
      labels,
      datasets: [{
        label: 'Jobs Completed',
        data: monthlyData,
        fill: false,
        borderColor: '#4BC0C0',
        tension: 0.1,
      }],
    };
  }, [jobs]);

  const componentsByMaintenanceStatus = useMemo(() => {
    const now = new Date();
    const OVERDUE_DAYS = 180;
    const statusCounts = components.reduce((acc, component) => {
      let status;
      if (!component.lastMaintenanceDate) {
        status = 'Not Started';
      } else {
        const lastDate = new Date(component.lastMaintenanceDate);
        const diffDays = (now - lastDate) / (1000 * 60 * 60 * 24);
        status = diffDays > OVERDUE_DAYS ? 'Overdue' : 'On Time';
      }
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});
    return {
      labels: Object.keys(statusCounts),
      datasets: [{
        label: 'Components by Maintenance Status',
        data: Object.values(statusCounts),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1,
      }],
    };
  }, [components]);

  return (
    <div className="kpi-charts-container">
      <div className="chart-card">
        <h3>Jobs by Status</h3>
        <Bar data={jobsByStatus} options={{ responsive: true, id: 'jobsByStatus' }} />
      </div>
      <div className="chart-card">
        <h3>Jobs Completed Over Time</h3>
        <Line data={jobsCompletedOverTime} options={{ responsive: true, id: 'jobsCompletedOverTime' }} />
      </div>
      <div className="chart-card">
        <h3>Components by Maintenance Status</h3>
        <Pie data={componentsByMaintenanceStatus} options={{ responsive: true, id: 'componentsByMaintenanceStatus' }} />
      </div>
    </div>
  );
};

export default Charts; 