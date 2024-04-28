import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Button.css'; // Import CSS file for styling

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="login-button" onClick={() => loginWithRedirect()}>
      Log In / Sign Up
    </button>
  );
};

export default LoginButton;

