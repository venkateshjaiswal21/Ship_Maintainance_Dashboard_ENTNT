import { useState } from 'react';
import '../../styles/ShipForm.css';

const ComponentForm = ({ initialData = {}, onSubmit, onClose }) => {
  const [form, setForm] = useState({
    name: initialData.name || '',
    serialNumber: initialData.serialNumber || '',
    installDate: initialData.installDate || '',
    lastMaintenanceDate: initialData.lastMaintenanceDate || '',
    shipId: initialData.shipId || '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.serialNumber || !form.installDate || !form.lastMaintenanceDate) {
      alert('Please fill all fields');
      return;
    }
    onSubmit({ ...initialData, ...form });
  };

  return (
    <div className="ships-form-modal">
      <form className="ships-form" onSubmit={handleSubmit}>
        <h3>{initialData.id ? 'Edit Component' : 'Add Component'}</h3>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Serial Number
          <input name="serialNumber" value={form.serialNumber} onChange={handleChange} required />
        </label>
        <label>
          Installation Date
          <input type="date" name="installDate" value={form.installDate} onChange={handleChange} required />
        </label>
        <label>
          Last Maintenance Date
          <input type="date" name="lastMaintenanceDate" value={form.lastMaintenanceDate} onChange={handleChange} required />
        </label>
        <div className="ships-form-actions">
          <button type="submit">{initialData.id ? 'Update' : 'Add'}</button>
          <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ComponentForm;