import React from 'react';

const WelcomeScreen = ({ onNavigate }) => {
  return (
    <div 
      className="welcome-screen" 
      onClick={onNavigate}
      role="button" 
      tabIndex="0"
      aria-label="Klik untuk masuk ke menu galeri"
      onKeyDown={(e) => {
        if(e.key === 'Enter' || e.key === ' ') {
          e.preventDefault(); 
          onNavigate();
        }
      }}
    >
      <div className="welcome-overlay"></div>
      <div className="welcome-content">
        <div className="welcome-text">
          <p className="welcome-title">Welcome to</p>
          <h1 className="pincela-title">Pincela</h1>
          <div className="wave-divider">~~~~~</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;