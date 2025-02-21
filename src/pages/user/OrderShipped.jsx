import React from 'react';
import { Container } from 'react-bootstrap';
import '../../css/OrderShipped.css';

const OrderShipped = () => {
    return (
        <Container className="order-shipped-container">
          <div className="order-box">
            <h1>Order Shipped</h1>
            <p>Your order has been successfully processed and shipped!</p>
          </div>
        </Container>
      );
};

export default OrderShipped;