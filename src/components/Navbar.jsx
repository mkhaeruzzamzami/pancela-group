import React from 'react';

const Navbar = ({ title, showBack, onBack, onMenuToggle }) => {
  return (
    <header className="header" role="banner">
      {showBack ? (
        <div 
          className="back-button" 
          onClick={onBack}
          role="button" 
          tabIndex="0"
          aria-label="Kembali"
          onKeyDown={(e) => {
            if(e.key === 'Enter' || e.key === ' ') {
              e.preventDefault(); 
              onBack();
            }
          }}
        >
          ←
        </div>
      ) : (
        <div 
          className="hamburger" 
          onClick={onMenuToggle}
          role="button" 
          tabIndex="0"
          aria-label="Toggle menu"
          onKeyDown={(e) => {
            if(e.key === 'Enter' || e.key === ' ') {
              e.preventDefault(); 
              onMenuToggle();
            }
          }}
        >
          ≡
        </div>
      )}
      <h1 className="header-title">{title}</h1>
      <div style={{ width: 40 }}></div>
    </header>
  );
};

export default Navbar;