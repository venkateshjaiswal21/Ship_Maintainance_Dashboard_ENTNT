import { useState } from 'react';
import { UseComponents } from '../../contexts/ComponentsContext';
import { UseJobs } from '../../contexts/JobsContext';
import { useNavigate } from 'react-router-dom';
import ComponentList from '../ShipComponents/ComponentList';
import ComponentForm from '../ShipComponents/ComponentForm';
import JobList from '../Jobs/JobList';
import { MData } from '../../data/MockData';
import '../../styles/ShipForm.css';

const ShipDetail = ({ ship, isAdmin }) => {
  const { components, addComponent, editComponent, deleteComponent } = UseComponents();
  const shipComponents = components.filter((c) => c.shipId === ship.id);

  const { jobs } = UseJobs();
  const engineers = MData.users.filter(u => u.role.toLowerCase() === 'engineer');
  const shipJobs = jobs.filter(job => job.shipId === ship.id);

  const [showComponentForm, setShowComponentForm] = useState(false);
  const [componentInitialData, setComponentInitialData] = useState({});

  const navigate = useNavigate();

  const handleAddComponent = () => {
    setComponentInitialData({ shipId: ship.id });
    setShowComponentForm(true);
  };

  const handleEditComponent = (component) => {
    setComponentInitialData(component);
    setShowComponentForm(true);
  };

  const handleDeleteComponent = (id) => {
    if (window.confirm('Are you sure you want to delete this component?')) {
      deleteComponent(id);
    }
  };

  const handleViewComponent = (component) => {
    navigate(`/components/${component.id}`);
  };

  const handleComponentFormSubmit = (componentData) => {
    if (componentInitialData && componentInitialData.id) {
      editComponent(componentData);
    } else {
      const newComponent = { ...componentData, id: Date.now().toString() };
      addComponent(newComponent);
    }
    setShowComponentForm(false);
  };

  if (!ship) {
    return <div>Ship not found.</div>;
  }

  return (
    <div>
      <h2 className="ship-detail-title">{ship.name} (IMO: {ship.imo})</h2>
      <div className="ship-detail-info">
        <strong>Flag:</strong> {ship.flag} <br />
        <strong>Status:</strong> {ship.status}
      </div>
      <div className="ship-detail-section">
        <h3>Components</h3>
        {isAdmin && (
          <button className="add-ship-btn" onClick={handleAddComponent} style={{ marginBottom: '1rem' }}>
            Add Component
          </button>
        )}
        <ComponentList
          components={shipComponents}
          isAdmin={isAdmin}
          onView={handleViewComponent}
          onEdit={handleEditComponent}
          onDelete={handleDeleteComponent}
        />
        {showComponentForm && (
          <ComponentForm
            initialData={componentInitialData}
            onSubmit={handleComponentFormSubmit}
            onClose={() => setShowComponentForm(false)}
          />
        )}
      </div>
      <div className="ship-detail-section">
        <h3>Maintenance History</h3>
        {shipJobs.length === 0 ? (
          <p>No maintenance jobs for this ship yet.</p>
        ) : (
          <JobList
            jobs={shipJobs}
            isAdmin={false}
            isEngineer={false}
            isInspector={false}
            userId={null}
            engineers={engineers}
            onView={() => {}}
            onEdit={() => {}}
            onDelete={() => {}}
            onStatusUpdate={() => {}}
            onApprove={() => {}}
            onUnapprove={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default ShipDetail;