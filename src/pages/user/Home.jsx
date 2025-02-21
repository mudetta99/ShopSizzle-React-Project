import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from '../../store/productSlice';
import '../../css/Home.css';

export function Home() {
  const dispatch = useDispatch();
  const { products, isLoading, errors } = useSelector(store => store.productSlice);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const filteredProducts = selectedCategory === 'All'
    ? products.slice(0, 6)
    : products.filter(product => product.category === selectedCategory).slice(0, 6);

  return (
    <div className="home-page">

      <marquee behavior="scroll" direction="left">
        Limited-time offer! Get up to 50% OFF! 🚀🛒

      </marquee>

      <section className="carousel-section">
        <Carousel className="custom-carousel">
          {products.slice(0, 3).map((product) => (
            <Carousel.Item key={product.id}>
              <img className="d-block w-100 carousel-image" src={product.image} alt={product.name} />
              <Carousel.Caption>
                <h1 className="carousel-title ">
                  <Link to={`/user/products/${product.id}`} className="text-danger carousel-link text-decoration-none">
                    {product.name}
                  </Link>
                </h1>
                <p className="carousel-price fs-2">${product.price} | {product.category}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>



      <section className="products-section">
        <Container>
          <h2 className="section-title text-center mb-5">Explore {selectedCategory} Products</h2>
          {isLoading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : errors ? (
            <div className="error-alert text-center">
              ⚠️ Error loading products: {errors.message}
            </div>
          ) : (

            <Row className="g-4">
              <section className="categories-section text-center my-4">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "primary" : "outline-primary"}
                    className="m-2"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </section>
              {filteredProducts.map((product) => (
                <Col key={product.id} md={4} lg={4} xl={4}>
                  <Card className="product-card">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      className="product-card-image"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="product-category">{product.category}</span>
                        <div className="product-rating">
                          <FaStar className="text-warning" />
                          <span className="ms-1">5.0</span>
                        </div>
                      </div>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text className="product-price">${product.price}</Card.Text>
                      <Card.Text className="product-description">
                        {product.description.slice(0, 80)}...
                      </Card.Text>
                      <div className="d-grid">
                        <Link
                          to={`/user/products/${product.id}`}
                          className="btn btn-primary btn-sm"
                        >
                          View Details
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
    </div>
  );
}
