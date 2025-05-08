import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-container" aria-label="Halaman Tentang Pancela">
      {/* <h1 className="page-header">About</h1> */}
      <div className="about-content">
        <p className="about-paragraph">
          Pincetaan adalah sebuah ruang pameran seni virtual yang dikembangkan untuk menyajikan kreasi seni Indonesia yang telah memberikan warna dalam perjalanan seni rupa bangsa...
        </p>
        {/* Keep all other paragraphs exactly the same */}
      </div>
      <div className="footer" aria-hidden="true">
        © 2025 Pancela
      </div>
    </div>
  );
};

export default AboutPage;