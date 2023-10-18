import React, { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { ListGroup, Button, Image, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Cart() {

  const { productosCarrito, eliminarProducto, incrementarCantidad, decrementarCantidad, totalcarrito, carImporteTotal } = useContext(CarritoContext);
  const navigate = useNavigate(); // Obtiene la instancia de history
  const compraTerminar = () => {
    if (totalcarrito !== 0) {
      navigate("/orders");
    } else {
      toast.error('El carrito está vacio. Ud. debe cargar su carrito', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    
  }

  return (
    <Container className="mt-3">
      <Row>
        <Col md={7}>
          <div className="border p-4 shadow">
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
        <div className="border p-4 shadow text-center">
            <h2>Resumen de la Compra</h2>
            <hr className="my-3" /> {/* Línea separadora con espacio superior e inferior */}
            <p>Cantidad de Productos: {totalcarrito}</p>
            <p>Suma Total a Pagar: ${carImporteTotal.toFixed(2)}</p>
            <Button variant="primary" className="mt-3"  onClick={() => compraTerminar()}>
            
              Continuar compra
            
              </Button>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  )
}

export default Cart;


