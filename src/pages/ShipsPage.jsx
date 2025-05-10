import { useEffect, useState } from 'react';
import { UseAuth } from '../contexts/AuthContext';
import { MData } from '../data/MockData';
import '../styles/ShipsPage.css';
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
      <table className="ships-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>IMO Number</th>
            <th>Flag</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ships.map((ship) => (
            <tr key={ship.id}>
              <td>{ship.name}</td>
              <td>{ship.imo}</td>
              <td>{ship.flag}</td>
              <td>{ship.status}</td>
              <td className="ships-actions">
                <button>View</button>
                {isAdmin && <><button>Edit</button><button>Delete</button></>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipsPage;
