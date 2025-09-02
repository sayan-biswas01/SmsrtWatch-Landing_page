import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaHeartPulse } from "react-icons/fa6";
import { BsSmartwatch } from "react-icons/bs";
import { IoWifiSharp } from "react-icons/io5";
import { CiBatteryFull } from "react-icons/ci";

// Self-contained CSS injected from this component (marketplace-ready)
const styles = `
.features-section { padding: 4rem 0; background: linear-gradient(135deg, #f8fafc, #eef2ff); }
.features-header { text-align: center; margin-bottom: 2.25rem; }
.features-eyebrow { text-transform: uppercase; letter-spacing: 2px; font-weight: 800; font-size: .85rem; color: #6a11cb; }
.features-title { font-size: clamp(1.6rem, 3.2vw, 2.2rem); font-weight: 800; margin: .35rem 0; color: #0f172a; }
.features-desc { color: #475569; max-width: 720px; margin: 0 auto; }

.feature-card { background: rgba(255,255,255,0.85); border-radius: 1rem; padding: 1.5rem; height: 100%; box-shadow: 0 10px 30px rgba(2, 6, 23, 0.08); border: 1px solid rgba(2, 6, 23, 0.06); backdrop-filter: blur(6px); transition: transform .3s ease, box-shadow .3s ease; }
.feature-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(2, 6, 23, 0.12); }
.feature-icon { width: 56px; height: 56px; border-radius: 14px; display: grid; place-items: center; margin-bottom: 1rem; background: linear-gradient(135deg, #6a11cb, #2575fc); color: #fff; box-shadow: 0 8px 24px rgba(37,117,252,0.22); }
.feature-title { font-weight: 700; font-size: 1.05rem; color: #0f172a; margin-bottom: .25rem; }
.feature-text { color: #5b6472; font-size: .95rem; margin: 0; }

/* Responsive tweaks */
@media (max-width: 991px) {
  .features-section { padding: 3.25rem 0; }
}
@media (max-width: 575px) {
  .feature-card { padding: 1.25rem; }
}
`;

const defaultFeatures = [
  {
    icon: <BsSmartwatch size={26} />, // react node
    title: "Premium Design",
    desc: "Bezel-less UHD display with scratch-resistant glass and lightweight alloy frame.",
  },
  {
    icon: <CiBatteryFull size={26} />,
    title: "10-Day Battery",
    desc: "Power-efficient chipset and fast charging keep you going longer.",
  },
  {
    icon: <FaHeartPulse size={26} />,
    title: "AI Health Suite",
    desc: "24/7 heart rate, SpO₂, sleep stages, and stress monitoring with insights.",
  },
  {
    icon: <IoWifiSharp size={26} />,
    title: "Smart Connectivity",
    desc: "BT calls, notifications, music control, and Find My Phone support.",
  },
];

export default function Features({
  eyebrow = "Why You'll Love It",
  title = "Powerful features, beautifully packaged",
  description = "Everything you need in a smartwatch — performance, health, and style — all crafted to delight your everyday.",
  items = defaultFeatures, // [{icon: <Icon/>, title: string, desc: string}, ...]
}) {
  // Inject styles once
  useEffect(() => {
    const id = "product-features-styles";
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id;
      s.innerHTML = styles;
      document.head.appendChild(s);
    }
  }, []);

  // motion variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section id="features" className="features-section">
      <Container>
        <div className="features-header">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
          >
            <div className="features-eyebrow fs-2">{eyebrow}</div>
            <h2 className="features-title fs-2 fw-bold">{title}</h2>
            {description && <p className="features-desc">{description}</p>}
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Row className="g-4">
            {items.map((f, idx) => (
              <Col key={idx} xl={3} lg={4} md={6} sm={12}>
                <motion.div
                  className="feature-card "
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="feature-icon text-center">{f.icon}</div>
                  <div className="feature-title fs-2">{f.title}</div>
                  <p className="feature-text fs-4">{f.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}
