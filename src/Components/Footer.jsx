import React from "react";
import "../styles/Footer.css"; // Import the CSS file
import footerBg from "../Images/footer-illustration.png";
import logo from "../assets/nine-to-nine-logo.png";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoPinterest } from "react-icons/io";



const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="footer-top"
        style={{
           backgroundImage: `url(${footerBg})`,
        }}
      >
        <div className="container">
          <div className="footer-brand">
           <a href="/" className="logo">
  <img src={logo} alt="Br Tech Logo" className="logo-img" />
</a>

            <p className="footer-text">
              Financial experts support or help you to find out which way you
              can raise your funds more.
            </p>
           <ul className="social-list">
  <li><a href="#"><IoLogoFacebook size={24} color="orange"/></a></li>
  <li><a href="#"><IoLogoTwitter size={24} color="orange"/></a></li>
  <li><a href="#"><IoLogoInstagram size={24} color="orange"/></a></li>
  <li><a href="#"><IoLogoPinterest size={24}color="orange" /></a></li>
</ul>
          </div>

       <div className="footer-info">
  <ul className="footer-list">
    <li>
      <p className="footer-list-title">Contact Info</p>
    </li>
    <li><p className="footer-list-item">+91 9123468601</p></li>
    <li><p className="footer-list-item"> the9to9cafe2021@gmail.com
</p></li>
    <li><address className="footer-list-item"> Bettiah West Champaran (Bihar)-845438
</address></li>
  </ul>

  <ul className="footer-list">
    <li>
      <p className="footer-list-title">Opening Hours</p>
    </li>
    <li><p className="footer-list-item">Monday–Friday: 08:00–22:00</p></li>
    <li><p className="footer-list-item">Tuesday 4PM: Till Midnight</p></li>
    <li><p className="footer-list-item">Saturday: 10:00–16:00</p></li>
  </ul>

  <ul className="footer-list">
    <li>
      <p className="footer-list-title">Quick Links</p>
    </li>
    <li><a href="/" className="footer-list-item">Home</a></li>
    <li><a href="/about" className="footer-list-item">About</a></li>
    <li><a href="/services" className="footer-list-item">Services</a></li>
    <li><a href="/contact" className="footer-list-item">Contact</a></li>
  </ul>
</div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            &copy; 2024 <a href="#" className="copyright-link">Nine To Nine </a> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
