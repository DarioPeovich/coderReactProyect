import React, { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext';
import { ListGroup, Button, Image, Container, Row, Col } from 'react-bootstrap';

function Cart() {
  const { productosCarrito, eliminarProducto } = useContext(CarritoContext);
console.log(productosCarrito)
  return (
    <Container className="mt-3">
      <Row>
        <Col md={7}>
          <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <h2>Cart</h2>
            </div>
            <ListGroup>
              {productosCarrito.length > 0 ? (
                productosCarrito.map((item) => (
                  <ListGroup.Item key={item.id} className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Image src={item.img} alt={item.descripcion} thumbnail className="mr-3" style={{ maxWidth: '100px' }} />
                      <div >
                        <h4>{item.descripcion}</h4>
                        <div className="d-flex align-items-center">
                        <p>Precio: {item.precioFinal}</p>
                        <p className='mx-2'>Cantidad: {item.cantCarrito}</p>
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
            {/* Aquí puedes agregar el resumen de la compra */}
            <h2>Resumen de la Compra</h2>
            {/* Agrega aquí los detalles del resumen, como total, impuestos, etc. */}
            <Button variant="primary" className="mt-3">Pagar</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart;




{/* <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
<h4>Prueb {item.descripcion}</h4>
<button style={{
    backgroundColor: "rebeccapurple",
    color: "white",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer",
    border: "none",
    margin: "10px"
}} onClick={()=> eliminarProducto(item.id)}> Eliminar del carrito </button>
</div> */}