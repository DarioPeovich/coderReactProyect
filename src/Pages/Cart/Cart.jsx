import React, { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { ListGroup, Button, Image, Container, Row, Col } from 'react-bootstrap';

function Cart() {
  const { productosCarrito, eliminarProducto, incrementarCantidad, decrementarCantidad } = useContext(CarritoContext);


  return (
    <Container className="mt-3">
      <Row>
        <Col md={7}>
          <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <h2>Carrito</h2>
            </div>
            <ListGroup>
              {productosCarrito.length > 0 ? (
                productosCarrito.map((item) => (
                  <ListGroup.Item key={item.id} className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Image src={item.img} alt={item.descripcion} thumbnail className="mr-3" style={{ maxWidth: '100px' }} />
                      <div>
                        <h4>{item.descripcion}</h4>
                        <div className="d-flex align-items-center">
                          <p className='mx-2'>Precio: {item.precioFinal}</p>
                          <div className="d-flex align-items-center">
                            <p className='mx-2'>Cant.:</p>
                            <Button onClick={() => decrementarCantidad(item.id)} variant="secondary">-</Button>
                            <p className='mx-2'>{item.cantCarrito}</p>
                            <Button onClick={() => incrementarCantidad(item.id)} variant="primary">+</Button>
                            <p className='mx-2'>Stock: {item.stock}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button onClick={() => eliminarProducto(item.id)} variant="danger">Eliminar</Button>
                  </ListGroup.Item>
                ))
              ) : (
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                  <span>Debe agregar productos al carrito</span>
                </div>
              )}
            </ListGroup>
          </div>
        </Col>
        <Col md={5}>
          <div>
            <h2>Resumen de la Compra</h2>
            <Button variant="primary" className="mt-3">Pagar</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart;


