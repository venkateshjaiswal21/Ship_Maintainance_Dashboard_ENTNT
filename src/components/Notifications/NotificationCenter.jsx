import { useContext } from 'react';
import { NotificationContext } from '../../contexts/NotificationContext';
import '../../styles/NotificationCenter.css';

const NotificationCenter = () => {
  const { notifications, dismissNotification } = useContext(NotificationContext);

  if (!notifications.length) {
    return <div className="notification-center empty">No notifications</div>;
  }

  return (
    <div className="notification-center">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((notif) => (
          <li key={notif.id} className={`notification ${notif.type.toLowerCase()}`}> 
            <div className="notification-content">
              <span className="notification-message">{notif.message}</span>
              <button className="dismiss-btn" onClick={() => dismissNotification(notif.id)}>Dismiss</button>
            </div>
            <div className="notification-meta">
              <span>{notif.type.replace(/_/g, ' ')}</span>
              <span className="notification-time">{notif.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCenter;
