import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col,  } from "reactstrap";

import heroImg from "../assets/images/Fastdelivery.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";


import "../styles/home.css";
import products from "../assets/fake-data/products.js";


import ProductCard from "../components/UI/product-card/ProductCard.jsx";



const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);




  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">El mejor asado de escobar</h5>
                <h1 className="mb-4 hero__title">
                  <span>Con ganas de asado?</span> Pedilo y esperalo <span> en tu casa</span>
                </h1>

                <p>
                  Veni a pasar un dia de campo comiendo las mejores carnes, o pedilo desde tu casa!
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                
                  <button className="all__foods-btn">
                    <Link to="/foods">Ver el menu</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    Sin costos de envio 
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% pago asegurado
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">Lo que hacemos</h5>
              <h2 className="feature__title">Disfruta un dia en naturaleza</h2>
              <h2 className="feature__title">
                Nosotros <span>te atendemos</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Una parrilla en Escobar con un amplio terreno y hermosa arboleda
              </p>
              <p className="feature__text">
                Atendida por sus dueños, es un emprendimiento familiar de muchos años                
              </p>
            </Col>

          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Nuestros Servicios</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  Todo
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  Comidas
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  Eventos nocturnos
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  Nuestro lugar
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
     
    </Helmet>
  );
};

export default Home;
