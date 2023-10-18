import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
  return (
    
      <Container className="bg-dark text-light py-4 mt-4" >
        <Row>
          <Col sm={6}>
            <p>&copy; Proyecto realizado con React JS</p>
          </Col>
          <Col sm={6} className="text-right" >
            <p>Contacto: dariofmpeovich@gmail.com</p>
            <p>Tel: 0236 15 4518076</p>
          </Col>
        </Row>
      </Container>
    
  );
}

export default Footer;
