import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css'; // Import CSS file for styling

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="profile-container">
        <h1 className="profile-title">Profile</h1>
        <div className="profile-info">
          <p className="profile-text">Name: {user.name}</p>
          <p className="profile-text">Email: {user.email}</p>
          {user.picture && <img className="profile-picture" src={user.picture} alt="Profile" />}
        </div>
      </div>
    )
  );
}

export default Profile;
