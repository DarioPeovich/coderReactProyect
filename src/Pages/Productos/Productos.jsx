import React from "react";
import { getProductos } from "../../../src/asynMock";
import Listado from "../../components/Listado/Listado";
import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";

function Productos() {
  const [productos, setProductos] = useState();
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    setLoading(true);
    getProductos()
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      {/* Toast de carga */}
      <Toast show={loading} animation={false}>
        <Toast.Body>Cargando productos...</Toast.Body>
      </Toast>

      <Listado productos={productos} />
    </div>
  );
}

export default Productos;
