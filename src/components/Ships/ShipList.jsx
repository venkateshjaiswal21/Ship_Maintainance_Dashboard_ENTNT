import React from 'react';

const ShipList = ({ ships, isAdmin }) => (
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
            {isAdmin && (
              <>
                <button>Edit</button>
                <button>Delete</button>
              </>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ShipList;