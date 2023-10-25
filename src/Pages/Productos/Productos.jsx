import React from "react";
//import { getProductos } from "../../../src/asynMock";
import Listado from "../../components/Listado/Listado";
import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import { useParams } from "react-router-dom";

function Productos() {
  let { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
  
    useEffect(() => {
      let myquery = "";
    const db = getFirestore();
    categoriaId = parseInt(categoriaId);
    switch (categoriaId) {
      case 0:
        myquery = query(collection(db, "productos"))
        break;
      case 1:
      case 2:
      case 3:
      case 4:
        myquery = query(collection(db, "productos"), where("rubro", "==", categoriaId) );
        break;
      default:
        myquery = query(collection(db, "productos"));
        break;
    }
    //const myquery = query(collection(db, "productos"))
    getDocs(myquery).then( (res) => {
      setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    })
  }, [categoriaId])

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
