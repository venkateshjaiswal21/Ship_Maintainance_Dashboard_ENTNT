import { createContext, useContext, useEffect, useState } from 'react';
import { MData } from '../data/MockData';

const ShipsContext = createContext();

const getShipsFromStorage = () => {
  const stored = localStorage.getItem('ships');
  if (stored) return JSON.parse(stored);
  return MData.ships;
};

export const ShipsProvider = ({ children }) => {
  const [ships, setShips] = useState(getShipsFromStorage());

  useEffect(() => {
    localStorage.setItem('ships', JSON.stringify(ships));
  }, [ships]);

  const addShip = (ship) => {
    setShips((prev) => [...prev, ship]);
  };

  const editShip = (updatedShip) => {
    setShips((prev) => prev.map((ship) => ship.id === updatedShip.id ? updatedShip : ship));
  };

  const deleteShip = (id) => {
    setShips((prev) => prev.filter((ship) => ship.id !== id));
  };

  return (
    <ShipsContext.Provider value={{ ships, addShip, editShip, deleteShip }}>
      {children}
    </ShipsContext.Provider>
  );
};

export const useShips = () => {
  const context = useContext(ShipsContext);
  if (!context) {
    throw new Error('useShips must be used within a ShipsProvider');
  }
  return context;
};
