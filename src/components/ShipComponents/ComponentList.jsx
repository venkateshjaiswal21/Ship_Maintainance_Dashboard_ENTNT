import '../../styles/ShipsPage.css';

const ComponentList = ({ components, isAdmin, onView, onEdit, onDelete }) => (
  <table className="ships-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Serial Number</th>
        <th>Installation Date</th>
        <th>Last Maintenance Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {components.map((component) => (
        <tr key={component.id}>
          <td>{component.name}</td>
          <td>{component.serialNumber}</td>
          <td>{component.installDate}</td>
          <td>{component.lastMaintenanceDate}</td>
          <td className="ships-actions">
            <button onClick={() => onView(component)}>View</button>
            {isAdmin && (
              <>
                <button onClick={() => onEdit(component)}>Edit</button>
                <button onClick={() => onDelete(component.id)}>Delete</button>
              </>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ComponentList;