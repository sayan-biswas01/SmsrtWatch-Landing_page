import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="logo">
            Smart<span>Watch</span>
          </h2>
          <p>
            Experience the future on your wrist. Stay connected, track your
            fitness, and enjoy stylish design with our latest smartwatch.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">Benefits</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#hero">Home</a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Contact Us</h3>
          <p>Email: support@smartwatch.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Tech Street, New York</p>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SmartWatch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
