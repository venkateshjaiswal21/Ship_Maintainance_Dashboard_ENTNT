import { useEffect, useState } from 'react';
import { UseAuth } from '../contexts/AuthContext';
import { MData } from '../data/MockData';
import '../styles/ShipsPage.css';
import ShipList from '../components/Ships/ShipList';
import DashboardNav from '../components/Dashboard/DashboardNav';
const getShipsFromStorage = () => {
  const stored = localStorage.getItem('ships');
  if (stored) return JSON.parse(stored);
  return MData.ships;
};

const ShipsPage = () => {
  const { user } = UseAuth();
  const [ships, setShips] = useState([]);

  useEffect(() => {
    setShips(getShipsFromStorage());
  }, []);

  const isAdmin = user.role.toLowerCase() === 'admin';

  return (
    <div className="ships-page-container">
      <div className="ships-header">
        <h2>Ships</h2>
        {isAdmin && <button className="add-ship-btn">Add Ship</button>}
      </div>
      <DashboardNav />
      <ShipList ships={ships} isAdmin={isAdmin} />
    </div>
  );
};

export default ShipsPage;