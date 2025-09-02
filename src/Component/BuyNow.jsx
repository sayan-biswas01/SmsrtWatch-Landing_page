import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";

const BuyNow = () => {
  return (
    <section
      className="checkout-section py-5"
      id="BuyNow"
      style={{ background: "#f8f9fa" }}
    >
      <Container>
        <Row className="justify-content-center">
          {/* Product Details */}
          <Col md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg border-0 rounded-4">
                <Card.Img
                  variant="top"
                  src="Image/SmartWatch9.png"
                  alt="Smart Watch"
                />
                <Card.Body>
                  <Card.Title>Smart Watch Pro X</Card.Title>
                  <Card.Text>
                    Experience the future on your wrist. Track your fitness,
                    receive notifications, and stay stylish with Smart Watch Pro
                    X.
                  </Card.Text>
                  <h3 className="text-primary fw-bold">$199.00</h3>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Checkout Form */}
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg border-0 p-4 rounded-4">
                <h3 className="mb-4">Complete Your Purchase</h3>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Shipping Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="text" placeholder="Zip Code" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Payment Method</Form.Label>
                    <Form.Select>
                      <option>Credit Card</option>
                      <option>PayPal</option>
                      <option>Stripe</option>
                    </Form.Select>
                  </Form.Group>

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-100 rounded-3"
                  >
                    Confirm Purchase
                  </Button>
                </Form>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BuyNow;
