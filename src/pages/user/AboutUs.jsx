import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function   () {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <h2 className="text-center mb-5">About ShopSizzle</h2>
          
          <div className="mb-5">
            <h4 className="mb-4">Our Story</h4>
            <p>
              Welcome to ShopSizzle, where luxury meets innovation in the world of e-commerce. 
              Founded with a vision to transform online shopping into an extraordinary experience, 
              we've dedicated ourselves to bringing you the finest products with unparalleled service.
            </p>
          </div>

          <div className="mb-5">
            <h4 className="mb-4">Our Mission</h4>
            <p>
              At ShopSizzle, we strive to elevate the standard of online shopping by offering 
              a carefully curated selection of premium products. Our mission is to provide our 
              customers with an exceptional shopping experience that combines luxury, convenience, 
              and reliability.
            </p>
          </div>

          <div className="mb-5">
            <h4 className="mb-4">Why Choose Us</h4>
            <Row className="g-4">
              <Col md={4}>
                <div className="text-center">
                  <h5 className="mb-3">Premium Quality</h5>
                  <p>Carefully selected products meeting our high standards of excellence</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <h5 className="mb-3">Customer First</h5>
                  <p>Dedicated support team ensuring your complete satisfaction</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <h5 className="mb-3">Secure Shopping</h5>
                  <p>State-of-the-art security for safe and confident shopping</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
