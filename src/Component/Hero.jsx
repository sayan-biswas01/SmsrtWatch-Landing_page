import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

// Updated Hero section with larger card, text, and image sizes
const styles = `
.smart-hero { min-height: 100vh; display: flex; align-items: center; padding: 3rem 0; background: linear-gradient(135deg, #6a11cb, #2575fc); color: #fff; }
.smart-hero .hero-card { background: rgba(255,255,255,0.06); padding: 3rem; border-radius: 1.5rem; box-shadow: 0 20px 50px rgba(0,0,0,0.4); min-height: 650px; }
.smart-hero .eyebrow { text-transform: uppercase; letter-spacing: 1.6px; font-weight: 700; font-size: 1rem; opacity: 0.95; color: #ffde59; }
.smart-hero h1 { font-size: clamp(2.5rem, 5vw, 3.5rem); margin: .5rem 0; line-height: 1.1; font-weight: 800; }
.smart-hero p.lead { font-size: 1.25rem; opacity: 0.95; margin-bottom: 2rem; }
.smart-hero .cta-row { margin-top: 2rem; gap: 1rem; flex-wrap: wrap; }
.smart-hero .feature-list { margin-top: 2rem; display: flex; gap: 1.25rem; flex-wrap: wrap; justify-content: flex-start; font-size: 1rem; }
.smart-hero .feature { background: rgba(255,255,255,0.15); padding: .65rem 1rem; border-radius: .8rem; font-weight: 600; }
.smart-hero .watch-wrap { display: flex; justify-content: center; align-items: center; margin-top: 2.5rem; }
.smart-hero .watch-img { max-width: 450px; width: 70%; height: auto; transform-origin: center; border-radius: 1rem; }
@media (max-width: 991px) {
  .smart-hero .hero-card { padding: 2.5rem; min-height: 600px; }
  .smart-hero h1 { font-size: clamp(2.2rem, 5vw, 3rem); }
  .smart-hero p.lead { font-size: 1.15rem; }
  .smart-hero .feature-list { justify-content: center; }
  .smart-hero .watch-img { max-width: 380px; }
}
@media (max-width: 575px) {
  .smart-hero { padding: 2rem 1rem; }
  .smart-hero h1 { font-size: clamp(1.8rem, 6vw, 2.4rem); }
  .smart-hero .watch-img { max-width: 320px; }
  .smart-hero .feature-list { font-size: 0.95rem; }
}
`;

export default function Hero({
  title = "Smart Simplicity",
  subtitle = "Redefining the way you stay connected,Track you Health, and elevate your style.",
  eyebrow = "Limited Edition",
  features = ["7-day battery", "Heart-rate AI", "Waterproof 50m"],
  imageSrc = "Image/SmartWatch9.png",
  ctaText = "Pre-order Now",
}) {
  useEffect(() => {
    const id = "marketplace-hero-styles";
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id;
      s.innerHTML = styles;
      document.head.appendChild(s);
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const float = {
    animate: {
      y: [0, -12, 0],
      rotate: [0, 3, -3, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="smart-hero" id="Hero">
      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="hero-card"
        >
          <Row className="align-items-center">
            <Col lg={6} md={12} xs={12}>
              <motion.div variants={fadeUp}>
                <div className="eyebrow">{eyebrow}</div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h1 style={{ width: "100px", fontSize: "60px" }}>{title}</h1>
              </motion.div>

              <motion.div variants={fadeUp}>
                <p
                  className="lead"
                  style={{ fontSize: "30px", marginTop: "30px" }}
                >
                  {subtitle}
                </p>
              </motion.div>

              <motion.div
                className="d-flex cta-row flex-wrap"
                variants={fadeUp}
              >
                <Button
                  href="#BuyNow"
                  size="lg"
                  variant="light"
                  className="me-3 mb-2 fs-2"
                >
                  {ctaText}
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  onClick={() =>
                    window.scrollTo({ top: 800, behavior: "smooth" })
                  }
                  className="mb-2 fs-2"
                >
                  Learn More
                </Button>
              </motion.div>

              <motion.div className="feature-list" variants={fadeUp}>
                {features.map((f, i) => (
                  <div className="feature" key={i}>
                    {f}
                  </div>
                ))}
              </motion.div>
            </Col>

            <Col lg={6} md={12} xs={12} className="watch-wrap">
              <motion.div
                {...float}
                className="d-flex justify-content-center align-items-center"
              >
                <motion.img
                  src={imageSrc}
                  alt={title}
                  className="watch-img img-fluid"
                  style={{ maxWidth: "600px", width: "100%" }}
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  drag="x"
                  dragConstraints={{ left: -30, right: 30 }}
                />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}
