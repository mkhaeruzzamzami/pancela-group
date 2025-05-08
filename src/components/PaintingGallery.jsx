import React from 'react';
import PaintingCard from './PaintingCard';

const PaintingGallery = ({ paintings, onSelectPainting }) => {
  return (
    <div aria-label="Galeri lukisan">
      {/* <h1 className="page-header">Gallery</h1> */}
      <div className="painting-container">
        {paintings.map(painting => (
          <PaintingCard 
            key={painting.id} 
            painting={painting} 
            onClick={onSelectPainting} 
          />
        ))}
      </div>
      <div className="footer" aria-hidden="true">
        © 2025 Pancela
      </div>
    </div>
  );
};

export default PaintingGallery;