import { createContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((type, message) => {
    const id = Date.now() + Math.random();
    const time = new Date().toLocaleTimeString();
    setNotifications((prev) => [
      ...prev,
      { id, type, message, time }
    ]);
  }, []);

  const dismissNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, dismissNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider; 