import React, { useContext, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { getItemById } from "../../Misc/Items";
import { Button, Card, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css"
import { CarritoContext } from "../../Context/CarritoContext";
function Item() {
  const { itemId } = useParams();
  const producto = getItemById(itemId);
  const [cantidad, setCantidad] = useState(1);
  const {productosCarrito, agregarCarrito} = useContext(CarritoContext) 
  const navigate = useNavigate(); // Obtiene la instancia de history

  const incrementarCantidad = () => {
    if (cantidad < producto.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  const h2Style = {
    backgroundColor: "#FF8000"
  }

  const productoAlCarrito = () => {
    producto.cantCarrito = cantidad;
    agregarCarrito([...productosCarrito, producto]);
    // Vuelve a la página anterior
    navigate(-1); // Utiliza navigate para volver atrás en el historial
  }

  return (
    <div>
      <h2 style={h2Style} className= "mt-3 text-white text-center">Detalle del Producto</h2>
      <Container className="mt-3">
        <Row xs={1} md={2} lg={4}>
        
          <Card className="mb-3 mx-auto cardCss">
            <Card.Img variant="top" src={producto.img} alt="" className="mt-3"></Card.Img>
            <Card.Body className="text-center">
              <Card.Title>{producto.descripcion}</Card.Title>
              <Card.Text>Precio: {producto.precioFinal}</Card.Text>
              <Card.Text>stock: {producto.stock}</Card.Text>

              <div className="mb-3">
                <p>Cantidad:</p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-secondary btn-sm" onClick={decrementarCantidad}>-</button>
                  <span className="mx-2">{cantidad}</span>
                  <button className="btn btn-secondary btn-sm " onClick={incrementarCantidad}> + </button>
                </div>
              </div>

              <Button variant="primary" className="botonComprar" onClick={() => productoAlCarrito()}>
                Agregar al Carrito de Compras
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Item;
