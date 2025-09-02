import React from "react";
import "./Pricing.css";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      features: [
        "1 Year Warranty",
        "Basic Health Tracking",
        "Standard Strap",
        "Bluetooth 5.0",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "$199",
      features: [
        "2 Years Warranty",
        "Advanced Health Tracking",
        "Premium Strap",
        "Waterproof 50m",
      ],
      popular: true,
    },
    {
      name: "Ultimate",
      price: "$299",
      features: [
        "3 Years Warranty",
        "Full Health Monitoring",
        "Luxury Strap",
        "GPS + LTE Support",
      ],
      popular: false,
    },
  ];

  return (
    <section className="pricing-section" id="Price">
      <div className="container">
        <h2 className="section-title">Choose Your Smartwatch</h2>
        <p className="section-subtitle">
          Find the perfect plan that fits your lifestyle
        </p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {plan.popular && <span className="badge">Most Popular</span>}
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <motion.button
                className="buy-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#BuyNow" className="text-light">
                  Buy Now
                </a>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
