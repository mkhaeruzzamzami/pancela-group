import React from 'react';

const PaintingCard = ({ painting, onClick }) => {
  return (
    <div 
      className="painting-card" 
      onClick={() => onClick(painting.id)}
      onKeyDown={(e) => {
        if(e.key === 'Enter' || e.key === ' ') {
          e.preventDefault(); 
          onClick(painting.id);
        }
      }} 
      tabIndex="0" 
      role="button" 
      aria-label={`Lihat detail lukisan ${painting.title} oleh ${painting.artist}`}
    >
      <img src={painting.img} alt={painting.title} className="painting-image" />
      <div className="p-1">
        <h2 className="painting-title">{painting.title}</h2>
        <p className="painting-artist">— {painting.artist}</p>
      </div>
    </div>
  );
};

export default PaintingCard;