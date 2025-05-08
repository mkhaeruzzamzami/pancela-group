import React from 'react';

const PaintingDetail = ({ painting, onBack }) => {
  if (!painting) return null;
  
  return (
    <div className="painting-detail" aria-live="polite" aria-label={`Detail lukisan ${painting.title}`}>
      {/* <button 
        onClick={onBack} 
        style={{
          marginBottom: '1rem', 
          fontSize: '1rem', 
          cursor: 'pointer', 
          background: '#4400ff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '0.5rem 1rem'
        }}
      >
        ← Kembali
      </button> */}
      <h2 className="detail-title">{painting.title}</h2>
      <p className="detail-artist">— {painting.artist}</p>
      <img src={painting.img} alt={painting.title} className="detail-image" />
      <p className="detail-text">{painting.description}</p>
      <div className="footer" aria-hidden="true">
        © 2025 Pancela
      </div>
    </div>
  );
};

export default PaintingDetail;