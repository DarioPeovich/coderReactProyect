import React from "react";
//import { getProductos } from "../../../src/asynMock";
import Listado from "../../components/Listado/Listado";
import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import {collection, getDocs, getFirestore, query} from "firebase/firestore"

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  //useEffect usado con fetch que lee de productos.json
  // useEffect(() => {
  //   setLoading(true);
  //   getProductos()
  //     .then((data) => {
  //       setProductos(data);
  //       setLoading(false);
  //       //setCargaProdOk(true);   //Usado x useEfecct carga inicial de Productos
  //     })
  //     .catch((error) => {});
  // }, []);

  useEffect(() => {
    const db = getFirestore();
    const myquery = query(collection(db, "productos"))
    getDocs(myquery).then( (res) => {
      setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    })
  }, [])

//************************************************************************
// === USEEFECCT UTILIZADO PARA PASAR LOS DATOS LOCALES A FIREBASE ===
//const ordersCollection = collection(dataBase, "productos")
//  const [cargaProdOk, setCargaProdOk] = useState(); Usado x useEffect carga inicial a FireBase
// useEffect(() => {
//   // const producto = {
//   //   descripcion: "Prueba"
//   // }
//   // addDoc(ordersCollection, producto).then(({id}) => console.log(id))
// console.log("Entre")
// console.log("Productos: " + productos)
//   productos.forEach(producto => {
//     console.log(producto)
//     addDoc(ordersCollection, producto).then(({id}) => console.log(id))
//   });
  
// },[productos]);
//************************************************************************

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
