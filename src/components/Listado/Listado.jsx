import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Listado.css"
import "../../App.css"

const Listado = ({ productos }) => {
  //console.log(productos)
  if (productos) {
    return (
      <Container>
        <Row xs={1} md={2} lg={4}>
          {productos.map((producto) => (
            <Col>
              <div className="d-flex flex-column h-100">
                <Card key={producto.id} className="h-100 mb-3 cardCss">
                  <Card.Img
                    variant="top"
                    src={producto.img}
                    alt="Img arduino 2560"
                  />
                  <Card.Body className="text-center d-flex flex-column">
                    <div>
                      <Card.Title>{producto.descripcion}</Card.Title>
                    </div>
                    <div className="mt-auto">
                      <Card.Text>Precio: $ {producto.precioFinal}</Card.Text>
                    </div>
                    <div className="mt-auto">
                      <Button variant="primary" className="botonComprar">
                     
                        <Link to={`/products/${producto.id}`} style={{ color: "white" }}>
                          Comprar
                        </Link>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
};
export default Listado;
