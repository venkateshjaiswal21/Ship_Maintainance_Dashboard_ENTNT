import { createContext, useContext, useEffect, useState } from 'react';
import { MData } from '../data/MockData';

const JobsContext = createContext();

const getJobsFromStorage = () => {
  const stored = localStorage.getItem('jobs');
  if (stored) return JSON.parse(stored);
  return MData.jobs;
};

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState(getJobsFromStorage());

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs((prev) => [...prev, job]);
  };

  const editJob = (updatedJob) => {
    setJobs((prev) => prev.map((j) => j.id === updatedJob.id ? updatedJob : j));
  };

  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((j) => j.id !== id));
  };

  const updateJobStatus = (jobId, newStatus) => {
    setJobs((prev) => prev.map((job) => 
      job.id === jobId ? { ...job, status: newStatus } : job
    ));
  };

  const approveJob = (jobId) => {
    setJobs((prev) => prev.map((job) => 
      job.id === jobId ? { ...job, status: 'Approved', approvedAt: new Date().toISOString() } : job
    ));
  };

  const unapproveJob = (jobId) => {
    setJobs((prev) => prev.map((job) => 
      job.id === jobId ? { ...job, status: 'Completed', approvedAt: null } : job
    ));
  };

  // Filter jobs by shipId, status, and priority
  const filterJobs = ({ shipId = '', status = '', priority = '' }) => {
    return jobs.filter(job =>
      (shipId ? job.shipId === shipId : true) &&
      (status ? job.status === status : true) &&
      (priority ? job.priority === priority : true)
    );
  };

  return (
    <JobsContext.Provider value={{ 
      jobs, 
      addJob, 
      editJob, 
      deleteJob, 
      filterJobs,
      updateJobStatus,
      approveJob,
      unapproveJob 
    }}>
      {children}
    </JobsContext.Provider>
  );
};

export const UseJobs = () => {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error('UseJobs must be used within a JobsProvider');
  }
  return context;
};
