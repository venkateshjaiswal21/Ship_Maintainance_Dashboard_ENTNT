const ShipDetail = ({ ship }) => {
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
        <p>Component list for this ship will go here.</p>
      </div>
      <div className="ship-detail-section">
        <h3>Maintenance History</h3>
        <p>Maintenance jobs for this ship will go here.</p>
      </div>
    </div>
  );
};

export default ShipDetail;
