import { useParams, useNavigate } from 'react-router-dom';
import { UseComponents } from '../contexts/ComponentsContext';
import ComponentDetail from '../components/ShipComponents/ComponentDetail';

const ComponentDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { components } = UseComponents();
  const component = components.find(c => String(c.id) === String(id));

  if (!component) {
    return (
      <div>
        <h2>Component Not Found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>&larr; Back</button>
      <ComponentDetail component={component} />
    </div>
  );
};

export default ComponentDetailPage;