import '../../styles/ShipDetailPage.css';

const ComponentDetail = ({ component }) => {
  if (!component) {
    return <div>Component not found.</div>;
  }

  return (
    <div className="ship-detail-info component-detail-section">
      <h3>{component.name}</h3>
      <div className="ship-detail-section">
        <strong>Serial Number:</strong> {component.serialNumber}<br />
        <strong>Installation Date:</strong> {component.installDate}<br />
        <strong>Last Maintenance Date:</strong> {component.lastMaintenanceDate}
      </div>
      <div>
        <h3>Job History</h3>
        <p></p>
      </div>
    </div>
  );
};

export default ComponentDetail;