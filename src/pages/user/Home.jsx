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

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);



  const trendProducts = products.filter(product => product.status === "trend").slice(0, 6);
  const laptopProducts = products.filter(product => product.category === "Laptop").slice(0, 6);
  const screenProducts = products.filter(product => product.category === "Screen").slice(0, 6);
  const mobileProducts = products.filter(product => product.category === "Mobile").slice(0, 6);
  const watchProducts = products.filter(product => product.category === "Watch").slice(0, 6);

  return (
    <div className="home-page">
      <marquee behavior="scroll" direction="left">
        Limited-time offer! Get up to 50% OFF! 🚀🛒
      </marquee>
      <div>
        <img className="d-block w-100 carousel-image" src={"https://f.nooncdn.com/mpcms/EN0003/assets/743229c1-d550-40fd-af47-5e0b25ca1888.png?format=png"} />
        <img className="d-block w-100 carousel-image" src={"https://f.nooncdn.com/mpcms/EN0003/assets/6339a048-93c8-4470-921f-4bbc1789cc98.png?format=png"} />
        <img className="d-block w-100 carousel-image mb-5" src={"https://m.media-amazon.com/images/G/01/DiscoTec/2024/CategoryFlips/Winter/CE_Tax/Browse/CE_Winter25_4227_DESKTOP_1500x90_Browse_EN.jpg"} />
      </div>
      <section className="carousel-section">
        <Carousel className="custom-carousel">
          {trendProducts.slice(0, 3).map((product) => (
            <Carousel.Item key={product.id}>
              <img className="d-block w-100 carousel-image" src={product.image} alt={product.name} />
              <Carousel.Caption>
                <h1 className="carousel-title">
                  <Link to={`/shopsizzle/products/${product.id}`} className="text-danger carousel-link text-decoration-none">
                    {product.name}
                  </Link>
                </h1>
                <p className="carousel-price fs-2">${product.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section className="products-section">
        <Link to="/shopsizzle/products/759f">
          <img className="d-block w-100 carousel-image mb-5" src={"https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2025/img/Consumer_Electronics/RMD25/1500x200_ASINs_EN_mobiles.jpg"} />
        </Link>
        <Link to="#gaming">
          <img className="d-block w-100 carousel-image mb-5" src={"https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/a9169774-0721-4e75-81fc-1e6fd688ba9f._CR0%2C0%2C2976%2C350_SX1500_.jpg"} />
        </Link>

        <Container>
          <h2 className="section-title text-center mb-5">Trending Products</h2>
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
              {trendProducts.map((product) => (
                <Col key={product.id} md={4} lg={4} xl={4}>
                  <Card className="product-card">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      className="product-card-image"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-2">
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
                          to={`/shopsizzle/products/${product.id}`}
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
        <div className="mt-5">
          <img className="d-block w-100 carousel-image" src={"https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/649f05f8-878f-41fe-a87e-086c35cd1f4b._CR0%2C0%2C1500%2C300_SX1500_.jpg"} />

          <Container>
            <h2 className="section-title text-center mt-5 mb-5">Screen Products</h2>
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
                {screenProducts.map((product) => (
                  <Col key={product.id} md={4} lg={4} xl={4}>
                    <Card className="product-card">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        className="product-card-image"
                      />
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-2">
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
                            to={`/shopsizzle/products/${product.id}`}
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
          <div className="mt-5">
            <img className="d-block w-100 carousel-image mb-5" src={"https://m.media-amazon.com/images/G/01/DiscoTec/2024/CategoryFlips/Holiday/CE/EN/Browse/CE_Holiday24_1241_LP-DT-Reciprocal-Stripe-Banner__1500x50_EN.jpg"} />
            {/* <Link to="/shopsizzle/products/4fef">
              <img className="d-block w-100 carousel-image mb-5" src={"https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/bf44bf8c-a1a9-46ea-a94c-c5b858318fd2._CR0%2C0%2C3000%2C600_SX1500_.jpg"} />
            </Link> */}
            <Link to="/shopsizzle/products/9628" >
              <img className="d-block w-100 carousel-image mb-5" src={"https://m.media-amazon.com/images/G/01/appcore/beats/MBA_M3_Desktop_v3.jpg"} />
            </Link>
            <Link to="/shopsizzle/products/5f99" >
              <img className="d-block w-100 carousel-image mb-5" src={"https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/96e2b898-fc85-4612-803b-9d0c3772ad73._CR0%2C0%2C3000%2C600_SX1500_.jpg"} />
            </Link>
          </div>

          <Container>
            <h2 className="section-title text-center mb-5">Laptops</h2>
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
                {laptopProducts.map((product) => (
                  <Col key={product.id} md={4} lg={4} xl={4}>
                    <Card className="product-card">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        className="product-card-image"
                      />
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-2">
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
                            to={`/shopsizzle/products/${product.id}`}
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


          <div className="mt-5">


            <Link to="/shopsizzle/products/2b8e" >
              <img className="d-block w-100 carousel-image mb-5" src={"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1b6e680a-c7e3-4f53-ba95-0a7ebad05af9._CR0%2C0%2C3000%2C600_SX1500_.jpg"} />
            </Link>
            <img className="d-block w-100 carousel-image mb-5" src={"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c3031259-1306-4b97-ac48-ca6c9c5abd10._CR0%2C0%2C3000%2C600_SX1500_.jpg"} />
          </div>

          <Container>
            <h2 className="section-title text-center mb-5">Mobile phone</h2>
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
                {mobileProducts.map((product) => (
                  <Col key={product.id} md={4} lg={4} xl={4}>
                    <Card className="product-card">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        className="product-card-image"
                      />
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-2">
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
                            to={`/shopsizzle/products/${product.id}`}
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


          <div className="mt-5">


            <Link to="/shopsizzle/products/1d98" >
              <img className="d-block w-100 carousel-image mb-5" src={"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c325307e-7109-44b5-9feb-219adcf6144d._CR0%2C0%2C1920%2C640_SX1500_.jpg"} />
            </Link>


          </div>

          <Container>
            <h2 className="section-title text-center mb-5">Smart Watch</h2>
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
                {watchProducts.map((product) => (
                  <Col key={product.id} md={4} lg={4} xl={4}>
                    <Card className="product-card">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        className="product-card-image"
                      />
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-2">
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
                            to={`/shopsizzle/products/${product.id}`}
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
        </div>
      </section>
    </div>
  );
}