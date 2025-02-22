import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Contact Us</h2>
      
      <Row className="g-5">
        <Col lg={5}>
          <div className="contact-info mb-5">
            <h4 className="mb-4">Get in Touch</h4>
            <div className="mb-4 d-flex align-items-center">
              <FaPhone className="me-3" />
              <div>
                <h5 className="mb-2">Phone</h5>
                <p className="mb-0">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="mb-4 d-flex align-items-center">
              <FaEnvelope className="me-3" />
              <div>
                <h5 className="mb-2">Email</h5>
                <p className="mb-0">support@shopsizzle.com</p>
              </div>
            </div>
            <div className="mb-4 d-flex align-items-center">
              <FaMapMarkerAlt className="me-3" />
              <div>
                <h5 className="mb-2">Location</h5>
                <p className="mb-0">123 Luxury Avenue<br />Shopping District, ST 12345</p>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={7}>
          <Form onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Button 
                  type="submit" 
                  className="w-100"
                  style={{
                    backgroundColor: "#212529",
                    border: "none",
                    padding: "12px"
                  }}
                >
                  Send Message
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}