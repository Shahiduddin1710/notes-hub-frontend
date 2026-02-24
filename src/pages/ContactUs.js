import React from "react";

const ContactUs = () => {

  const handleEmailClick = () => {
    window.location.href = "mailto:techshaho786@gmail.com";
  };

  const handleWhatsappClick = () => {
    window.open("https://wa.me/919773166286", "_blank");
  };

  return (
    <div className="page-wrapper">
      <main className="page-container-main">

        <div className="hero-card">
          <div className="card-icon">💬</div>
          <h1 className="hero-title">Get Help Fast</h1>
          <p className="hero-subtitle">
            Have questions about notes or need assistance? You can contact us directly.
          </p>
        </div>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(380px, 450px) 1fr",
            gap: "2rem"
          }}
        >
          {/* Contact Info */}
          <div className="contact-card">
            <h2 className="card-title">Contact Info</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              
              <div>
                <h3 className="card-title">Email</h3>
                <p className="card-text">techshaho786@gmail.com</p>
              </div>

              <div>
                <h3 className="card-title">Phone / WhatsApp</h3>
                <p className="card-text">+91 9773166286</p>
              </div>

              <div>
                <h3 className="card-title">Hours</h3>
                <p className="card-text">Mon - Sat : 9 AM - 8 PM</p>
              </div>

            </div>
          </div>

          {/* Contact Actions */}
          <div className="contact-card">
            <h2 className="card-title">Contact Options</h2>

            <p className="card-text" style={{ marginBottom: "2rem" }}>
              Choose your preferred way to contact us.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

              <button
                className="submit-btn"
                onClick={handleEmailClick}
              >
                📧 Send Email
              </button>

              <button
                className="submit-btn"
                onClick={handleWhatsappClick}
                style={{ background: "linear-gradient(135deg,#16a34a,#22c55e)" }}
              >
                💬 Chat on WhatsApp
              </button>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ContactUs;
