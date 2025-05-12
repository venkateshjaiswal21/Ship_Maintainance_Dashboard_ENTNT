import { useState, useEffect, useContext } from 'react';
import { UseAuth } from '../contexts/AuthContext';
import { UseJobs } from '../contexts/JobsContext';
import { UseShips } from '../contexts/ShipsContext';
import { MData } from '../data/MockData';
import JobList from '../components/Jobs/JobList';
import JobForm from '../components/Jobs/JobForm';
import '../styles/ShipsPage.css';
import DashboardNav from '../components/Dashboard/DashboardNav';
import { NotificationContext } from '../contexts/NotificationContext';

const JobsPage = () => {
  const { user } = UseAuth();
  const { jobs, addJob, editJob, deleteJob, filterJobs, updateJobStatus, approveJob, unapproveJob } = UseJobs();
  const { ships } = UseShips();
  const { addNotification } = useContext(NotificationContext);
  const isAdmin = user.role.toLowerCase() === 'admin';
  const isEngineer = user.role.toLowerCase() === 'engineer';
  const isInspector = user.role.toLowerCase() === 'inspector';

  const engineers = MData.users.filter(u => u.role.toLowerCase() === 'engineer');

  const [showForm, setShowForm] = useState(false);
  const [formInitialData, setFormInitialData] = useState({});

  const [selectedShip, setSelectedShip] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedEngineer, setSelectedEngineer] = useState('');
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
    if (newStatus === 'Completed') {
      const job = jobs.find(j => j.id === jobId);
      addNotification('JOB_COMPLETED', `Job '${job?.type || jobId}' was completed.`);
    }
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
      addNotification('JOB_UPDATED', `Job '${jobData.type}' was updated.`);
    } else {
      const newJob = { ...jobData, id: Date.now().toString() };
      addJob(newJob);
      addNotification('JOB_CREATED', `Job '${jobData.type}' was created.`);
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
      engineer: selectedEngineer,
    });
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
        <select value={selectedEngineer} onChange={e => setSelectedEngineer(e.target.value)}>
          <option value="">All Engineers</option>
          {engineers.map(e => (
            <option key={e.id} value={e.id}>{e.name}</option>
          ))}
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