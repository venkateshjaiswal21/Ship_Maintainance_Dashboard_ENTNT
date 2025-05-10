const JobList = ({ 
  jobs, 
  isAdmin, 
  isEngineer, 
  isInspector, 
  userId,
  onView, 
  onEdit, 
  onDelete, 
  onStatusUpdate,
  onApprove,
  onUnapprove,
  engineers = [] 
}) => (
  <table className="ships-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Assigned Engineer</th>
        <th>Scheduled Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {jobs.map((job) => {
        const engineer = engineers.find(e => e.id === job.assignedEngineerId);
        const isAssignedEngineer = isEngineer && job.assignedEngineerId === userId;
        const canUpdateStatus = isAdmin || isAssignedEngineer;
        const canApprove = isInspector && job.status === 'Completed';
        const canUnapprove = isInspector && job.status === 'Approved';

        return (
          <tr key={job.id}>
            <td>{job.type}</td>
            <td>{job.priority}</td>
            <td>
              {isAdmin ? (
                <select 
                  value={job.status} 
                  onChange={(e) => onStatusUpdate(job.id, e.target.value)}
                  className="status-select"
                >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Approved">Approved</option>
                </select>
              ) : isEngineer && job.assignedEngineerId === userId ? (
                job.status === 'Approved' ? (
                  <span className="status-text status-approved">Approved</span>
                ) : (
                  <select 
                    value={job.status} 
                    onChange={(e) => onStatusUpdate(job.id, e.target.value)}
                    className="status-select"
                  >
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                )
              ) : (
                job.status
              )}
            </td>
            <td>{engineer ? engineer.name : 'Unassigned'}</td>
            <td>{job.scheduledDate}</td>
            <td className="ships-actions">
              <button onClick={() => onView(job)}>View</button>
              {isAdmin && (
                <>
                  <button onClick={() => onEdit(job)}>Edit</button>
                  <button onClick={() => onDelete(job.id)}>Delete</button>
                </>
              )}
              {canApprove && (
                <button 
                  onClick={() => onApprove(job.id)}
                  className="approve-btn"
                >
                  Approve
                </button>
              )}
              {canUnapprove && (
                <button 
                  onClick={() => onUnapprove(job.id)}
                  className="unapprove-btn"
                >
                  Unapprove
                </button>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default JobList;