import React from 'react';
import '../styles/HelpSupportPage.css';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaQuestionCircle, FaMapMarkerAlt } from 'react-icons/fa';

const HelpSupportPage = () => {
  return (
    <div className="help-wrapper">
      <div className="help-header">
        <h1>Need Help?</h1>
        <p>We're here to assist you with any questions or concerns</p>
      </div>

      <div className="help-sections">
        {/* FAQ Section */}
        <div className="help-card faq-card">
          <FaQuestionCircle className="help-icon" />
          <h3>FAQs</h3>
          <p>Find answers to the most common questions about ordering, delivery, and payments.</p>
          <button>View FAQs</button>
        </div>

        {/* Contact by Phone */}
        <div className="help-card">
          <FaPhoneAlt className="help-icon" />
          <h3>Call Us</h3>
          <p>For immediate assistance, speak to our customer support executive.</p>
          <a href="tel:+916202000340">+91 6202000340</a>
        </div>

        {/* Contact by WhatsApp */}
        <div className="help-card whatsapp-card">
          <FaWhatsapp className="help-icon" />
          <h3>WhatsApp</h3>
          <p>Drop us a message on WhatsApp, and we'll get back to you ASAP.</p>
          <a href="https://wa.me/916202000340" target="_blank" rel="noopener noreferrer">Start Chat</a>
        </div>

        {/* Email Support */}
        <div className="help-card email-card">
          <FaEnvelope className="help-icon" />
          <h3>Email Us</h3>
          <p>Send us your query and we’ll respond within 24 hours.</p>
          <a href="mailto:contact@nine2nine.com">contact@nine2nine.com</a>
        </div>

        {/* Visit Restaurant */}
        <div className="help-card location-card">
          <FaMapMarkerAlt className="help-icon" />
          <h3>Visit Us</h3>
          <p>Want to visit? Here’s our restaurant location.</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">View on Map</a>
        </div>
      </div>
    </div>
  );
};

export default HelpSupportPage;
