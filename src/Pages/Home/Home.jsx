import { useState, useEffect } from "react";
import { getProductosPromo } from "../../asynMock";
import Listado from "../../components/Listado/Listado";
import { Toast } from "react-bootstrap";

function Home() {
  const [productosNovedades, setProdNovedades] = useState();
  const [productosOfertas, setProdOfertas] = useState();
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    //  const prueba = getArchJsonProductos()
    //   prueba
    const promocionId = 2;
    getProductosPromo(promocionId)
      .then((data) => {
        setLoading(true);
        setProdNovedades(data);
        setLoading(false);
      })
      .catch((error) => {});
  }, []);
  useEffect(() => {
    //  const prueba = getArchJsonProductos()
    //   prueba
    const promocionId = 3;
    getProductosPromo(promocionId)
      .then((data) => {
        setProdOfertas(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      {/* Toast de carga */}
      <Toast show={loading} animation={false}>
        <Toast.Body>Cargando productos...</Toast.Body>
      </Toast>

      <h2 className="mt-3 bg-warning text-white text-center">Novedades</h2>
      <Listado productos={productosNovedades} />
      <h2 className="mt-3 bg-warning text-white text-center">Ofertas</h2>
      <Listado productos={productosOfertas} />
    </div>
  );
}

export default Home;
