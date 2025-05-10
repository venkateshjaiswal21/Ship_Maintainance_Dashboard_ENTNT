import { useParams, useNavigate } from 'react-router-dom';
import { useShips } from '../contexts/ShipsContext';
import '../styles/ShipDetailPage.css';
import ShipDetail from '../components/Ships/ShipDetail';

const ShipDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ships } = useShips();
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
      <ShipDetail ship={ship} />
    </div>
  );
};

export default ShipDetailPage;