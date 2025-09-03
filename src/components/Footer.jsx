import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Side: About & Social Media */}
        <div className="footer-left">
          <h3>Model College Rajmahal</h3>
          <p>
            Empowering students with quality education and nurturing future leaders. Join our vibrant community today!
          </p>
          <div className="footer-contact">
            <p><FaPhone /> +91 12345 67890</p>
            <p><FaEnvelope /> modelclgrjl@gmail.com</p>
          </div>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#course">Courses</a></li>
            <li><a href="#notice">Notice Board</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#admissions">Admissions</a></li>
          </ul>
        </div>

        {/* Right Side: Map */}
        <div className="footer-right">
          <h3>Our Location</h3>
          <iframe
            title="College Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.422110904424!2d87.75753087437043!3d25.019745238867372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa8fb39aab9b27%3A0xba3c68bf3db7aae!2sModel%20College%20Rajmahal%2C%20Sahibganj!5e0!3m2!1sen!2sin!4v1756835041124!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Model College Rajmahal. All rights reserved.</p>
        <p>Designed with ❤️ by College Web Team</p>
      </div>
    </footer>
  );
}
