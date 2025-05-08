import React from 'react';

const SupportPage = () => {
  return (
    <div className="support-container" aria-label="Halaman Support">
      {/* <h1 className="page-header">Support</h1> */}
      <form 
        className="support-form" 
        onSubmit={e => {
          e.preventDefault(); 
          alert('Terima kasih atas pesan Anda!');
        }}
      >
        <div className="form-group">
          <input type="email" className="form-input" placeholder="Email*" required aria-label="Email" />
        </div>
        <div className="form-group">
          <input type="tel" className="form-input" placeholder="Phone*" required aria-label="Telepon" />
        </div>
        <div className="form-group">
          <input type="text" className="form-input" placeholder="Name*" required aria-label="Nama" />
        </div>
        <div className="form-group">
          <textarea className="form-textarea" placeholder="Message*" required aria-label="Pesan"></textarea>
        </div>
        <button type="submit" className="submit-button" aria-label="Kirim pesan">Submit</button>
      </form>
    </div>
  );
};

export default SupportPage;