import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
//import { getItemById } from "../../Misc/Items";
import { Button, Card, Container, Row, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { CarritoContext } from "../../Context/CarritoContext";
import { doc, getDoc, getFirestore } from "firebase/firestore";
function Item() {
  const { itemId } = useParams();
  //const producto = getItemById(itemId);
  const [producto, setProducto] = useState();
  const [cantidad, setCantidad] = useState(1);
  const { productosCarrito, agregarCarrito } = useContext(CarritoContext);
  const [showToast, setShowToast] = useState(false);
  const [showStockAlert, setShowStockAlert] = useState(false);
  const navigate = useNavigate(); // Obtiene la instancia de history
  
  //OBTENER UN DOCUMENTO POR ID DE FIREBASE
  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "productos", itemId);
    getDoc(itemRef).then((documento) => {
      console.log("En Item: " + documento.data());  
      setProducto({id: documento.id, ...documento.data()});
      })
      .catch((error) => {
        console.error("Error al obtener el producto desde Firebase:", error);
      });
  }, []);



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
    backgroundColor: "#FF8000",
  };

  const productoAlCarrito = () => {
    const productoExistente = productosCarrito.find(
      (artic) => artic.id === producto.id
    );
    if (producto.stock > 0) {
      if (!productoExistente) {
        producto.cantCarrito = cantidad;
        agregarCarrito([...productosCarrito, producto]);
        // Vuelve a la página anterior
        navigate(-1); // Utiliza navigate para volver atrás en el historial
      } else {
        //ir al carrito
        // Redirigir al usuario al componente Cart
        setShowToast(true);
        setTimeout(() => {
          //el setTimeout es para que se vea el Toast, porque si no va al Componente Cart de una y no se ve.
          navigate("/cart");
        }, 2000);
      }
    } else {
      setShowStockAlert(true);
    }
  };

  if (!producto) {
    return (
      <div>
        <h2>Cargando...</h2>
      </div>
    );
  }

  
    return (
      <div>
        {showStockAlert && (
        <div className="alert alert-danger" role="alert">
          El producto está agotado. No se puede agregar al carrito.
        </div>
      )}
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          style={{
            position: "fixed", // Cambia la posición a "fixed"
            top: "50%", // Centra verticalmente en la pantalla
            left: "50%", // Centra horizontalmente en la pantalla
            transform: "translate(-50%, -50%)", // Centra el contenido
            zIndex: 9999, // Aumenta la z-index del Toast
          }}
        >
          <Toast.Header>
            <strong className="mr-auto">
              Producto Existente en el carrito de Compras
            </strong>
          </Toast.Header>
          <Toast.Body>redirigiendo al carrito.</Toast.Body>
        </Toast>

        <h2 style={h2Style} className="mt-3 text-white text-center">
          Detalle del Producto
        </h2>
        <Container className="mt-3">
          <Row xs={1} md={2} lg={4}>
            <Card className="mb-3 mx-auto cardCss">
              <Card.Img
                variant="top"
                src={producto.img}
                alt=""
                className="mt-3"
              ></Card.Img>
              <Card.Body className="text-center">
                <Card.Title>{producto.descripcion}</Card.Title>
                <Card.Text>Precio: {producto.precioFinal}</Card.Text>
                <Card.Text>stock: {producto.stock}</Card.Text>

                <div className="mb-3">
                  <p>Cantidad:</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={decrementarCantidad}
                    >
                      -
                    </button>
                    <span className="mx-2">{cantidad}</span>
                    <button
                      className="btn btn-secondary btn-sm "
                      onClick={incrementarCantidad}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>

                <Button
                  variant="primary"
                  className="botonComprar"
                  onClick={() => productoAlCarrito()}
                >
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
