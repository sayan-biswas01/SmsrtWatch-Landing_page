import React from "react";

import { Container, Row, Col, Accordion, Card } from "react-bootstrap";

const faqs = [
  {
    question: "What is the battery life of the smartwatch?",
    answer:
      "Our smartwatch offers up to 7 days of battery life on a single charge, depending on usage.",
  },
  {
    question: "Is the smartwatch waterproof?",
    answer:
      "Yes! It is water-resistant up to 50 meters, making it perfect for swimming and daily use.",
  },
  {
    question: "Can I connect the smartwatch to both iOS and Android?",
    answer:
      "Absolutely! The smartwatch is compatible with both iOS and Android devices via Bluetooth.",
  },
  {
    question: "Does it track my sleep and heart rate?",
    answer:
      "Yes, it features advanced sensors for 24/7 heart rate monitoring and sleep tracking.",
  },
];

const FAQ = () => {
  return (
    <div
      style={{
        background: "#31e5fdff",
        maxHeight: "90vh",
        marginBottom: "30px",
        marginTop: "30px",
        paddingTop: "60px",
      }}
    >
      <div>
        <Row className="justify-content-center ">
          <Col lg={8} md={10}>
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold ">
                💬 Frequently Asked Questions
              </h1>
              <p className="text-muted fs-5">
                Find answers to the most common questions our customers ask.
              </p>
            </div>

            <Accordion defaultActiveKey="0">
              {faqs.map((faq, idx) => (
                <Accordion.Item
                  eventKey={idx.toString()}
                  key={idx}
                  className="mb-3 shadow-sm border-0 rounded"
                >
                  <Accordion.Header>
                    <span className="fw-semibold fs-5">{faq.question}</span>
                  </Accordion.Header>
                  <Accordion.Body className="bg-white text-secondary fs-6">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <div className="text-center mt-5">
              <p className="text-muted mb-2 fs-5">Still have questions?</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FAQ;
