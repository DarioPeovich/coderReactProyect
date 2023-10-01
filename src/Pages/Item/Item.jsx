import React from "react";
import { Link, useParams } from "react-router-dom";
import { getItemById } from "../../Misc/Items";
import { Button, Card, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Item() {
  const { itemId } = useParams();
  const producto = getItemById(itemId);

  return (
    <div>
      {/* Utiliza clases de Bootstrap para hacer que la Card sea responsiva */}
      <h2 className= "mt-3 bg-warning text-white text-center">Detalle del Producto</h2>
      <Container className="mt-3">
        <Row xs={1} md={2} lg={4}>
        
          <Card className="mb-3 mx-auto cardCss">
            <Card.Img variant="top" src={producto.img} alt="" className="mt-3"></Card.Img>
            <Card.Body className="text-center">
              <Card.Title>{producto.descripcion}</Card.Title>
              <Card.Text>Precio: {producto.precioFinal}</Card.Text>
              <Card.Text>stock: {producto.stock}</Card.Text>
              <Button variant="primary">
                <Link
                  to={`/products/${producto.id}`}
                  style={{ color: "white" }}
                >
                  Agregar al Carrito
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Item;

//{
  /* <div className="d-flex flex-column h-100">
<Card key={producto.id} className="h-100 mb-3 rounded">
  <Card.Img
    variant="top"
    src={producto.img}
    alt="Img arduino 2560"
    className="img-fluid mx-auto"
    style={{ maxWidth: "500px"}}
  />
  <Card.Body className="text-center d-flex flex-column">
    <div>
      <Card.Title>{producto.descripcion}</Card.Title>
    </div>
    <div className="mt-auto">
      <Card.Text>Precio: $ {producto.precioFinal}</Card.Text>
    </div>
    <div className="mt-auto">
      <Button variant="primary">
        {/* Utiliza Link para envolver el botón 
        <Link
          to={`/products/${producto.id}`}
          style={{ color: "white" }}
        >
          Comprar
        </Link>
      </Button>
    </div>
  </Card.Body>
</Card>
</div> */
//}
