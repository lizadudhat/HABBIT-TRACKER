import React from 'react';

const NotificationPanel = ({ notifications }) => {
  return (
    <div>
      <h2 style={{color:"#412774"}}>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications at the moment.</p>
      ) : (
        <ul className="list-group"style={{margin:"10px"}}>
          {notifications.map((notification, index) => (
            <li key={index} className="list-group-item list-group-item-info"style={{margin:"10px",backgroundColor:"#412774",color:"white"}}>
              {notification}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationPanel;
