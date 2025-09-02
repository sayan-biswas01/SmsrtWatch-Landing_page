import React from "react";
import { motion } from "framer-motion";
import "./Demo.css";
import imag1 from "../assets/Pictur/SmrtWatch01.jpg";
import imag2 from "../assets/Pictur/SmartWatch3.jpg";
import imag3 from "../assets/Pictur/SmartWatch4.jpg";

const Demo = () => {
  return (
    <section className="product-demo py-5">
      <div className="container">
        <motion.h2
          className="text-center text-light mb-4 section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Experience the Future of Smartwatch
        </motion.h2>

        <div className="demo-wrapper">
          {/* Product Image */}
          <motion.div
            className="demo-image"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={imag1}
              style={{ height: "300px" }}
              alt="Smartwatch Demo"
            />
          </motion.div>
          <motion.div
            className="demo-image"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={imag2}
              style={{ height: "300px" }}
              alt="Smartwatch Demo"
            />
          </motion.div>
          <motion.div
            className="demo-image"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={imag3}
              style={{ height: "300px" }}
              alt="Smartwatch Demo"
            />
          </motion.div>

          {/* Demo Video / Animation */}
          <motion.div
            className="demo-video"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="Smartwatch Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <button className="demo-btn">Get Your Smartwatch Now</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;
