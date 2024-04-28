import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import NavBar from './components/NavBar';
import HomePage from './homepage';
import Profile from './profile';
import FileUpload from './components/FileUpload'; 
import './styles/app.css';

function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<FileUpload />} />  
        </Routes>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;
