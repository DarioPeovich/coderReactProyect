import React, { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

function Cart() {
  const {
    productosCarrito,
    eliminarProducto,
    incrementarCantidad,
    decrementarCantidad,
    totalcarrito,
    carImporteTotal,
  } = useContext(CarritoContext);
  const navigate = useNavigate(); // Obtiene la instancia de history

  const compraTerminar = () => {
    if (totalcarrito !== 0) {

      navigate("/orders");
    } else {
      toast.error("El carrito está vacío. Ud. debe cargar su carrito", {
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
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={12} lg={7}>
          <div className="border p-4 shadow">
            <div className="text-center mb-3">
              <h2>Carrito</h2>
            </div>

            <div>
              {productosCarrito.length > 0 ? (
                productosCarrito.map((item) => (
                  <div key={item.id} className=" border ">
                    <Row>
                      <Col md={12} lg={2}>
                        <Image
                          src={item.img}
                          thumbnail
                          className=" img-fluid "
                        />
                      </Col>
                      <Col md={12} lg={5}>
                        <div class=" box">
                          <h4>{item.descripcion}</h4>
                        </div>
                      </Col>
                      <Col md={12} lg={3}>
                        <div class=" box d-flex align-items-center">
                          <div className=" ">
                            <div>
                              <p className="mx-2">
                                Precio:$ {item.precioFinal.toFixed(2)}
                              </p>
                            </div>
                            <div className="d-flex stock-label">
                              <p className="mx-2">Cant.:</p>
                              <Button
                                onClick={() => decrementarCantidad(item.id)}
                                variant="secondary"
                              >
                                -
                              </Button>
                              <p className="mx-2">{item.cantCarrito}</p>
                              <Button
                                onClick={() => incrementarCantidad(item.id)}
                                variant="primary"
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={12} lg={2}>
                        <div class="d-flex justify-content-center align-items-center box">
                          <p className="mx-1 stock-label">Stock:{item.stock}</p>
                        </div>
                      </Col>

                      <div className="d-flex justify-content-center align-items-center">
                        <Button
                          className="mt-2 mb-2"
                          onClick={() => eliminarProducto(item.id)}
                          variant="danger"
                        >
                          Eliminar
                        </Button>
                      </div>
                    </Row>
                  </div>
                  //Fin Izquierdo
                ))
              ) : (
                <div className="text-center">
                  <span>Debe agregar productos al carrito</span>
                </div>
              )}
            </div>
          </div>
        </Col>
        <Col md={12} lg={5}>
          <div className="border p-4 shadow text-center">
            <h2>Resumen de la Compra</h2>
            <hr className="my-3" />
            <p>Cantidad de Productos: {totalcarrito}</p>
            <p>Suma Total a Pagar: ${carImporteTotal.toFixed(2)}</p>
            <Button
              variant="primary"
              className="mt-3"
              onClick={() => compraTerminar()}
            >
              Continuar compra
            </Button>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}

export default Cart;
