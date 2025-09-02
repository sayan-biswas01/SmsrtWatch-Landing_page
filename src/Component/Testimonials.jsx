import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "Fitness Enthusiast",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "This smartwatch completely changed my lifestyle! The health tracking features are so accurate and motivating.",
  },
  {
    name: "Sarah Johnson",
    role: "Tech Blogger",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "I've tested many smartwatches, but this one is sleek, stylish, and packed with premium features at a fair price!",
  },
  {
    name: "Michael Smith",
    role: "Business Professional",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    review:
      "Battery life is outstanding! I can go days without charging. Perfect for busy professionals like me.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          What Our Customers Say
        </motion.h2>
        <p className="text-lg text-gray-600 mb-12">
          Trusted by thousands of happy customers worldwide 🌍
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
            >
              {/* Profile Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto border-4 border-indigo-500 shadow-md"
              />
              {/* Review Text */}
              <p className="mt-4 text-gray-600 italic">
                "{testimonial.review}"
              </p>
              {/* Name & Role */}
              <h4 className="mt-4 font-semibold text-gray-800">
                {testimonial.name}
              </h4>
              <span className="text-sm text-gray-500">{testimonial.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
