import { useState, useEffect } from "react";
import { getProductosPromo } from "../../asynMock";
import Listado from "../../components/Listado/Listado";
import { Toast } from "react-bootstrap";

function Home() {
  const [productosNovedades, setProdNovedades] = useState();
  const [productosOfertas, setProdOfertas] = useState();
  const [loadPromo, setLoadPromo] = useState(true); // Estado para controlar la carga
  const [loadOfertas, setLoadOfertas] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    //  const prueba = getArchJsonProductos()
    //   prueba
    const promocionId = 2;
    getProductosPromo(promocionId)
      .then((data) => {
        setLoadPromo(true);
        setProdNovedades(data);
        setLoadPromo(false);
      })
      .catch((error) => {});
  }, []);
  useEffect(() => {
    //  const prueba = getArchJsonProductos()
    //   prueba
    const promocionId = 3;
    getProductosPromo(promocionId)
      .then((data) => {
        setLoadOfertas(true);
        setProdOfertas(data);
        setLoadOfertas(false);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      {/* Toast de carga */}
      <Toast show={loadPromo} animation={false} className="mx-auto my-auto">
        <Toast.Body>Cargando productos en Promocion...</Toast.Body>
      </Toast>
      {/* Toast de carga */}
      <Toast show={loadOfertas} animation={false} className="mx-auto my-auto">
        <Toast.Body>Cargando productos en Oferta...</Toast.Body>
      </Toast>

      <h2 className="mt-3 bg-warning text-white text-center">Novedades</h2>
      <Listado productos={productosNovedades} />
      <h2 className="mt-3 bg-warning text-white text-center">Ofertas</h2>
      <Listado productos={productosOfertas} />
    </div>
  );
}

export default Home;
