import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import './NavBar.css'; // Import CSS file for styling

const NavBar = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <nav className="nav-bar">
      <div className="title-container">
        <h1 className="glowing-title">Healthcare Insurance App</h1>
      </div>
      <div className="user-profile-container">
        {isAuthenticated ? (
          <div className="user-profile">
            <img src={user.picture} alt={user.name} className="profile-img" />
            <span>{user.name}</span>
            <LogoutButton className="logout-button" />
          </div>
        ) : (
          <LoginButton className="login-button" />
        )}
      </div>
    </nav>
  );
};

export default NavBar;

