import React from 'react';
import './homepage.css'; 

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="content-wrapper">
        <div className="running-text">
          <p>This test app is built for Pangea Securathon Hackathon-TCC</p>
        </div>
        <div className="hero-section">
          <div className="hero-text">
            <p>Your trusted platform for managing your healthcare insurance needs.</p>
            <a href="https://pangea-securathon-showdown.devpost.com/?ref_feature=challenge&ref_medium=your-open-hackathons&ref_content=Submissions+open" target="_blank" rel="noopener noreferrer">
              <button className="get-started-button">Hackathon Link</button>
            </a>
          </div>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/GCAjowsOnuU?si=P4FgodiXOhJx0coq" 
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        
        <div className="footer">
          <p>&copy; 2024 Healthcare Insurance App. All rights reserved to TCC - DEEPAN .</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
