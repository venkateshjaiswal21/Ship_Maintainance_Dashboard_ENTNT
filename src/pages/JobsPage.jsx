import { useState, useEffect } from 'react';
import { UseAuth } from '../contexts/AuthContext';
import { useJobs } from '../contexts/JobsContext';
import { useShips } from '../contexts/ShipsContext';
import { MData } from '../data/MockData';
import JobList from '../components/Jobs/JobList';
import JobForm from '../components/Jobs/JobForm';
import '../styles/ShipsPage.css';
import DashboardNav from '../components/Dashboard/DashboardNav';

const JobsPage = () => {
  const { user } = UseAuth();
  const { jobs, addJob, editJob, deleteJob, filterJobs, updateJobStatus, approveJob, unapproveJob } = useJobs();
  const { ships } = useShips();
  const isAdmin = user.role.toLowerCase() === 'admin';
  const isEngineer = user.role.toLowerCase() === 'engineer';
  const isInspector = user.role.toLowerCase() === 'inspector';

  const engineers = MData.users.filter(u => u.role.toLowerCase() === 'engineer');

  const [showForm, setShowForm] = useState(false);
  const [formInitialData, setFormInitialData] = useState({});

  const [selectedShip, setSelectedShip] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleAddJob = () => {
    setFormInitialData({});
    setShowForm(true);
  };

  const handleEditJob = (job) => {
    setFormInitialData(job);
    setShowForm(true);
  };

  const handleDeleteJob = (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      deleteJob(id);
    }
  };

  const handleViewJob = (job) => {
    alert(
      `Job Details:\nType: ${job.type}\nPriority: ${job.priority}\nStatus: ${job.status}\nScheduled: ${job.scheduledDate}`
    );
  };

  const handleStatusUpdate = (jobId, newStatus) => {
    updateJobStatus(jobId, newStatus);
  };

  const handleApprove = (jobId) => {
    if (window.confirm('Are you sure you want to approve this job?')) {
      approveJob(jobId);
    }
  };

  const handleUnapprove = (jobId) => {
    if (window.confirm('Are you sure you want to unapprove this job?')) {
      unapproveJob(jobId);
    }
  };

  const handleFormSubmit = (jobData) => {
    if (formInitialData && formInitialData.id) {
      editJob(jobData);
    } else {
      const newJob = { ...jobData, id: Date.now().toString() };
      addJob(newJob);
    }
    setShowForm(false);
  };

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  const handleFilter = () => {
    let filtered = filterJobs({
      shipId: selectedShip,
      status: selectedStatus,
      priority: selectedPriority,
    });
    if (isEngineer) {
      filtered = filtered.filter(j => j.assignedEngineerId === user.id);
    }
    setFilteredJobs(filtered);
  };

  return (
    <div className="ships-page-container">
      <DashboardNav />
      <br />
      <div className="ships-header">
        <h2>Jobs</h2>
        {isAdmin && (
          <button className="add-ship-btn" onClick={handleAddJob}>
            Add Job
          </button>
        )}
      </div>
      <div className="jobs-filters">
        <select value={selectedShip} onChange={e => setSelectedShip(e.target.value)}>
          <option value="">All Ships</option>
          {ships.map(ship => (
            <option key={ship.id} value={ship.id}>{ship.name}</option>
          ))}
        </select>
        <select value={selectedStatus} onChange={e => setSelectedStatus(e.target.value)}>
          <option value="">All Statuses</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Approved">Approved</option>
        </select>
        <select value={selectedPriority} onChange={e => setSelectedPriority(e.target.value)}>
          <option value="">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={handleFilter}>Filter</button>
      </div>
      <JobList
        jobs={filteredJobs}
        isAdmin={isAdmin}
        isEngineer={isEngineer}
        isInspector={isInspector}
        userId={user.id}
        engineers={engineers}
        onView={handleViewJob}
        onEdit={handleEditJob}
        onDelete={handleDeleteJob}
        onStatusUpdate={handleStatusUpdate}
        onApprove={handleApprove}
        onUnapprove={handleUnapprove}
      />
      {showForm && (
        <JobForm
          initialData={formInitialData}
          onSubmit={handleFormSubmit}
          onClose={() => setShowForm(false)}
          engineers={engineers}
        />
      )}
    </div>
  );
};

export default JobsPage;