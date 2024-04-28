import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Button.css'; // Import CSS file for styling

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="logout-button" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
