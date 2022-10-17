import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/Mi_Tranquera-removebg-preview.png";

import "../../styles/footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
            </div>
          </Col>

          

          <Col lg="9" md="6" sm="6">
            <h5 className="footer__title">Contacto</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Ubicacion: Av. San Martin 2100, Belen de escobar</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Cel: +54 9 3484 54-8941</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: Gabrielferlaino@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by JFV para NUCBA
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Seguinos: </p>
              <span>
                {" "}
                <a href="https://es-la.facebook.com/Mitranquera/" target="_blank" rel="noreferrer">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.instagram.com/mitranquera.parrilla/" target="_blank" rel="noreferrer">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://wa.me/543484548941" target="_blank" rel="noreferrer">
                  <i class="ri-whatsapp-line"></i>
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
