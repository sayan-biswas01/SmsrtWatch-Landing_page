import React from "react";
import "./Benefits.css";
import { motion } from "framer-motion";

import { BsFillCheckCircleFill } from "react-icons/bs";

const benefitsData = [
  {
    id: 1,
    title: "24/7 Health Tracking",
    desc: "Monitor your heart rate, sleep, and fitness activity anytime, anywhere.",
  },
  {
    id: 2,
    title: "Long Battery Life",
    desc: "Stay powered up with a battery that lasts up to 7 days on a single charge.",
  },
  {
    id: 3,
    title: "Premium Build Quality",
    desc: "Crafted with durable materials for comfort and long-term use.",
  },
  {
    id: 4,
    title: "Smart Notifications",
    desc: "Get instant call, message, and app alerts right on your wrist.",
  },
];

const Benefits = () => {
  return (
    <section className="benefits-section" id="about">
      <div className="container">
        <motion.h2
          className="benefits-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Our Smartwatch?
        </motion.h2>

        <div className="benefits-grid">
          {benefitsData.map((item) => (
            <motion.div
              key={item.id}
              className="benefit-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.id * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <BsFillCheckCircleFill className="icon" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
