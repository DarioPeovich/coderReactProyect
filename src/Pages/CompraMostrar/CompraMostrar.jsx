import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Col, Container, Image, Row } from "react-bootstrap";

function CompraMostrar() {
  const { orderId } = useParams();
  const [itemsOrder, SetItemsOrder] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const dataBase = getFirestore();
    const itemRef = doc(dataBase, "orders", orderId);

    // Obtener el documento
    getDoc(itemRef)
      .then((documento) => {
        if (documento.exists()) {
          const data = documento.data();
          SetItemsOrder(data.items);
        } else {
          console.log("El documento no existe.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el documento:", error);
      });
  }, []);

  return (
    <div>
    <div className="d-flex align-items-center justify-content-center bg-success">
      <h2>El id. de su Compra es: {orderId}</h2>
      </div>
    
      <Container className="mt-3">
        {itemsOrder.length > 0 ? (
          itemsOrder.map((item) => (
            <div key={item.id} className="border mb-1">
              <Row>
                <Col md={12} lg={2}>
                  <Image src={item.img} thumbnail className="img-fluid " />
                </Col>
                <Col md={12} lg={3}>
                  <div class="box">
                    <h4>{item.descripcion}</h4>
                  </div>
                </Col>
                <Col md={12} lg={3}>
                  <div className="mb-2">
                    <h5>Precio:$ {item.precioFinal.toFixed(2)}</h5>
                  </div>
                </Col>
                <Col md={12} lg={3}>
                  <div className="">
                    <h5>Cant.: {item.cantCarrito}</h5>
                  </div>
                </Col>
              </Row>
            </div>
          ))
        ) : (
          <div className="text-center">
            <span>
              Algo a fallado. No se pueden ver los articulos de la compra
            </span>
          </div>
        )}
      </Container>
      <div className="border text-center mt-4">
      <h5>Tome nota de su numero de Orden de Compra, para poder realizar el siguimiento de su envio</h5>
      <h5>Agradecemos su confianza en nosotros!</h5>
      </div>
      <div 
      className="d-flex justify-content-center align-items-center mt-4"
      onClick={() => navigate("/")} 
      >
      <Button className="bg-success">Continuar</Button>
      </div>
    </div>
  );
}

export default CompraMostrar;
