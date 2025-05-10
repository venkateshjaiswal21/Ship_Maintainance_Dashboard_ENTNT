import { useState } from 'react';
import '../../styles/ShipForm.css';

const defaultStatus = 'Active';

const ShipForm = ({ initialData = {}, onSubmit, onClose }) => {
  const [form, setForm] = useState({
    name: initialData.name || '',
    imo: initialData.imo || '',
    flag: initialData.flag || '',
    status: initialData.status || defaultStatus,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.imo || !form.flag) {
      alert('Please fill all fields');
      return;
    }
    onSubmit({ ...initialData, ...form });
  };

  return (
    <div className="ships-form-modal">
      <form className="ships-form" onSubmit={handleSubmit}>
        <h3>{initialData.id ? 'Edit Ship' : 'Add Ship'}</h3>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          IMO Number
          <input name="imo" value={form.imo} onChange={handleChange} required />
        </label>
        <label>
          Flag
          <input name="flag" value={form.flag} onChange={handleChange} required />
        </label>
        <label>
          Status
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Under Maintenance">Under Maintenance</option>
            <option value="Inactive">Inactive</option>
          </select>
        </label>
        <div className="ships-form-actions">
          <button type="submit">{initialData.id ? 'Update' : 'Add'}</button>
          <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ShipForm;