import { useState } from 'react';
import '../../styles/ShipForm.css'; 

const JobForm = ({ initialData = {}, onSubmit, onClose, engineers = [] }) => {
  const [form, setForm] = useState({
    type: initialData.type || '',
    priority: initialData.priority || 'Medium',
    status: initialData.status || 'Open',
    assignedEngineerId: initialData.assignedEngineerId || '',
    scheduledDate: initialData.scheduledDate || '',
    componentId: initialData.componentId || '',
    shipId: initialData.shipId || '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.type || !form.priority || !form.status || !form.assignedEngineerId || !form.scheduledDate) {
      alert('Please fill all fields');
      return;
    }
    onSubmit({ ...initialData, ...form });
  };

  return (
    <div className="ships-form-modal">
      <form className="ships-form" onSubmit={handleSubmit}>
        <h3>{initialData.id ? 'Edit Job' : 'Add Job'}</h3>
        <label>
          Job Type
          <input name="type" value={form.type} onChange={handleChange} required />
        </label>
        <label>
          Priority
          <select name="priority" value={form.priority} onChange={handleChange}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <label>
          Status
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <label>
          Assigned Engineer
          <select name="assignedEngineerId" value={form.assignedEngineerId} onChange={handleChange} required>
            <option value="">Select Engineer</option>
            {engineers.map((eng) => (
              <option key={eng.id} value={eng.id}>{eng.name}</option>
            ))}
          </select>
        </label>
        <label>
          Scheduled Date
          <input type="date" name="scheduledDate" value={form.scheduledDate} onChange={handleChange} required />
        </label>
        <div className="ships-form-actions">
          <button type="submit">{initialData.id ? 'Update' : 'Add'}</button>
          <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;