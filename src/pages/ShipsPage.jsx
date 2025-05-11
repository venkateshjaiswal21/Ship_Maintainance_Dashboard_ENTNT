import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from '../contexts/AuthContext';
import { UseShips } from '../contexts/ShipsContext';
import '../styles/ShipsPage.css';
import ShipList from '../components/Ships/ShipList';
import ShipForm from '../components/Ships/ShipForm';
import DashboardNav from '../components/Dashboard/DashboardNav';

const ShipsPage = () => {
  const { user } = UseAuth();
  const { ships, addShip, editShip, deleteShip } = UseShips();
  const isAdmin = user.role.toLowerCase() === 'admin';
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [formInitialData, setFormInitialData] = useState({});

  const handleAddShip = () => {
    setFormInitialData({});
    setShowForm(true);
  };

  const handleEditShip = (ship) => {
    setFormInitialData(ship);
    setShowForm(true);
  };

  const handleDeleteShip = (id) => {
    if (window.confirm('Are you sure you want to delete this ship?')) {
      deleteShip(id);
    }
  };

  const handleViewShip = (ship) => {
    navigate(`/ships/${ship.id}`);
  };

  const handleFormSubmit = (shipData) => {
    if (formInitialData && formInitialData.id) {
      editShip(shipData);
    } else {
      const newShip = { ...shipData, id: Date.now().toString() };
      addShip(newShip);
    }
    setShowForm(false);
  };

  return (
    <div className="ships-page-container">
      <DashboardNav />
      <br />
      <div className="ships-header">
        <h2>Ships</h2>
        {isAdmin && (
          <button className="add-ship-btn" onClick={handleAddShip}>
            Add Ship
          </button>
        )}
      </div>
      <ShipList
        ships={ships}
        isAdmin={isAdmin}
        onEdit={handleEditShip}
        onDelete={handleDeleteShip}
        onView={handleViewShip}
      />
      {showForm && (
        <ShipForm
          initialData={formInitialData}
          onSubmit={handleFormSubmit}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default ShipsPage;