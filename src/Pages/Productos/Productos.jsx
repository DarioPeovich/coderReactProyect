import React from "react";

import Listado from "../../components/Listado/Listado";
import arrayProductos from "../../db/productos.json"; //Atencion las imagenes locales para que puedan ser consumidas, deben estar dentro de la carpeta public,
// y si están dentro de una carpeta img esta debe residir en public. No anda si se alojan en otra carpeta
import { useEffect, useState } from "react";

function Productos() {
  const getArchJsonProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arrayProductos);
      }, 1000);
    });
  };

  useEffect(() => {
    //  const prueba = getArchJsonProductos()
    //   prueba
    getArchJsonProductos()
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {});
  }, []);

  const [productos, setProductos] = useState();

  return (
    <div>
      <Listado productos={productos} />
    </div>
  );
}

export default Productos;
