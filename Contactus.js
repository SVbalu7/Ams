import React from "react";
import "./Contactus.css";

const ContactUs = () => {
  const handleEmailClick = () => {
    // Open the Gmail app with pre-filled email details
    window.location.href = "mailto:baladithyakurra@gmail.com";
  };

  return (
    <div className="contact-us-container">
      <h1>Contact us</h1>
      <div className="contact-options">
        <button onClick={handleEmailClick} className="contact-btn email-btn">
          Email Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
