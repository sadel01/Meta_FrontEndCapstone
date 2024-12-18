import React from "react";
import { ReactComponent as Logo } from '../logo.svg';

const Footer = () => {
  return (
      <footer className="FooterNav">
        <div className="footerContainer">
          <div className="footer-logo">
            <h2>Little Lemon Restaurant</h2>
            <Logo className="logoFooter"/>
            <p>© 2024 Little Lemon. All rights reserved.</p>
          </div>
          <div className="footer-links">
              <h2>Doormat Navigation</h2>
              <li><a href="/">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Menu</a></li>
              <li><a href="">Order Online</a></li>
              <li><a href="/booking">Booking</a></li>
            </div>
              <div className="contact">
                  <h2>Contact</h2>
                  <li>  Address:
                        123 Main Street
                        Chicago, IL 60601
                        United States
                  </li>
                  <li>+1 (312) 555-1234</li>
                  <li>info@littlelemonchicago.com</li>
              </div>
              <div className="social-media-links">
              <h2>Social Media Links</h2>
                  <li><a href="">Facebook</a></li>
                  <li><a href="">Twitter</a></li>
              </div>
        </div>
      </footer>
  );
};
export default Footer;
