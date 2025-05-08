import React from 'react';

const NavMenu = ({ isOpen, onNavigate, onClose }) => {
  return (
    <>
      {/* Overlay hitam transparan saat sidebar terbuka */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose} 
        role="button" 
        tabIndex="0" 
        aria-label="Tutup menu" 
        onKeyDown={(e) => {
          if(e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); 
            onClose();
          }
        }}
      ></div>
      
      {/* Sidebar menu */}
      <nav className={`sidebar-menu ${isOpen ? 'active' : ''}`} role="navigation" aria-label="Main menu">
        <div className="sidebar-header">
          <button 
            className="close-sidebar" 
            onClick={onClose}
            aria-label="Tutup sidebar"
          >
            ×
          </button>
          <h2 className="sidebar-title">Pancela</h2>
        </div>
        <div className="sidebar-items">
          <a href="#" className="sidebar-item" onClick={(e) => {e.preventDefault(); onNavigate('home');}}>Home</a>
          <a href="#" className="sidebar-item" onClick={(e) => {e.preventDefault(); onNavigate('menu');}}>Gallery</a>
          <a href="#" className="sidebar-item" onClick={(e) => {e.preventDefault(); onNavigate('support');}}>Support</a>
          <a href="#" className="sidebar-item" onClick={(e) => {e.preventDefault(); onNavigate('contact');}}>Contact</a>
          <a href="#" className="sidebar-item" onClick={(e) => {e.preventDefault(); onNavigate('about');}}>About</a>
        </div>
      </nav>
    </>
  );
};

export default NavMenu;