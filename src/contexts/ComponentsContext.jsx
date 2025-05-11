import { createContext, useContext, useEffect, useState } from 'react';
import { MData } from '../data/MockData';

const ComponentsContext = createContext();

const getComponentsFromStorage = () => {
  const stored = localStorage.getItem('components');
  if (stored) return JSON.parse(stored);
  return MData.components;
};

export const ComponentsProvider = ({ children }) => {
  const [components, setComponents] = useState(getComponentsFromStorage());

  useEffect(() => {
    localStorage.setItem('components', JSON.stringify(components));
  }, [components]);

  const addComponent = (component) => {
    setComponents((prev) => [...prev, component]);
  };

  const editComponent = (updatedComponent) => {
    setComponents((prev) => prev.map((c) => c.id === updatedComponent.id ? updatedComponent : c));
  };

  const deleteComponent = (id) => {
    setComponents((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <ComponentsContext.Provider value={{ components, addComponent, editComponent, deleteComponent }}>
      {children}
    </ComponentsContext.Provider>
  );
};

export const UseComponents = () => {
  const context = useContext(ComponentsContext);
  if (!context) {
    throw new Error('UseComponents must be used within a ComponentsProvider');
  }
  return context;
};
