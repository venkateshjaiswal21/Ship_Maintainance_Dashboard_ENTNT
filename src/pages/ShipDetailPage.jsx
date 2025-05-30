import { useParams, useNavigate } from 'react-router-dom';
import { UseShips } from '../contexts/ShipsContext';
import { UseAuth } from '../contexts/AuthContext';
import '../styles/ShipDetailPage.css';
import ShipDetail from '../components/Ships/ShipDetail';

const ShipDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ships } = UseShips();
  const { user } = UseAuth();
  const isAdmin = user.role === 'Admin';
  const ship = ships.find((s) => s.id === id);

  if (!ship) {
    return (
      <div className="ship-detail-container">
        <h2>Ship Not Found</h2>
        <button onClick={() => navigate(-1)} className="ship-detail-back">Go Back</button>
      </div>
    );
  }

  return (
    <div className="ship-detail-container">
      <button onClick={() => navigate(-1)} className="ship-detail-back">&larr; Back</button>
      <ShipDetail ship={ship} isAdmin={isAdmin} />
    </div>
  );
};

export default ShipDetailPage;