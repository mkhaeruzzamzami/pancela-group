import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-container" aria-label="Halaman Kontak Kami">
      {/* <h1 className="page-header">Contact</h1> */}
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-icon" aria-hidden="true">☎</span>
          <div className="contact-text">
            <p><strong>(+62) 765 665</strong></p>
            <p>Hubungi kami jika membutuhkan bantuan</p>
          </div>
        </div>
        <div className="contact-item">
          <span className="contact-icon" aria-hidden="true">✉</span>
          <div className="contact-text">
            <p><strong>PancelaIndonesia@gmail.com</strong></p>
            <p>Partisipasi dalam bentuk dukungan dan bantuan hubungi Email kami.</p>
          </div>
        </div>
        <div className="contact-item">
          <span className="contact-icon" aria-hidden="true">⌖</span>
          <div className="contact-text">
            <p><strong>Cirebon, Jawa Barat, Indonesia</strong></p>
            <img 
              src="https://maps.googleapis.com/maps/api/staticmap?center=Cirebon,JawaBarat,Indonesia&zoom=12&size=400x150&key=AIzaSyBdVl-cTICSwYKrZ95SuvNw7dbMuDt1KG0" 
              alt="Peta lokasi Cirebon" 
              className="contact-map" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;