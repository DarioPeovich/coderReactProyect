import { useState, useEffect } from "react";
//import { getProductosPromo } from "../../asynMock";
import Listado from "../../components/Listado/Listado";
import { Toast } from "react-bootstrap";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

function Home() {
  const [productosNovedades, setProdNovedades] = useState();
  const [productosOfertas, setProdOfertas] = useState();
  const [loadPromo, setLoadPromo] = useState(true); // Estado para controlar el Toast
  const [loadOfertas, setLoadOfertas] = useState(true); // Estado para controlar el Toast

  // useEffect(() => {
  //   //  const prueba = getArchJsonProductos()
  //   //   prueba
  //   const promocionId = 2;
  //   getProductosPromo(promocionId)
  //     .then((data) => {
  //       setLoadPromo(true);
  //       setProdNovedades(data);
  //       setLoadPromo(false);
  //     })
  //     .catch((error) => {});
  // }, []);

  useEffect(() => {
    const promocionId = 2;
    const db = getFirestore();
    const myquery = query(collection(db, "productos"), where("promocionId", "==", promocionId) );
    getDocs(myquery).then( (res) => {
      setProdNovedades(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoadPromo(false);
    })
  }, []);

  useEffect(() => {
    const promocionId = 3;
    const db = getFirestore();
    const myquery = query(collection(db, "productos"), where("promocionId", "==", promocionId) );
    getDocs(myquery).then( (res) => {
      setProdOfertas(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoadOfertas(false);
    })
  }, []);

  // useEffect(() => {
  //   //  const prueba = getArchJsonProductos()
  //   //   prueba
  //   const promocionId = 3;
  //   getProductosPromo(promocionId)
  //     .then((data) => {
  //       setLoadOfertas(true);
  //       setProdOfertas(data);
  //       setLoadOfertas(false);
  //     })
  //     .catch((error) => {});
  // }, []);

    // Estilo para los h2
    const h2Style = {
      backgroundColor: "#FF8000",
      color: "white",
      textAlign: "center",
      padding: "10px",
      marginTop: "20px",
    };

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

      <h2 style={h2Style}>Novedades</h2>
      <Listado productos={productosNovedades} />
      <h2 style={h2Style}>Ofertas</h2>
      <Listado productos={productosOfertas} />
    </div>
  );
}

export default Home;
