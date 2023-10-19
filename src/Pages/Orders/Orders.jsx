import React, { useContext, useState } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Orders() {
  const { productosCarrito, totalcarrito, carImporteTotal, agregarCarrito } =
    useContext(CarritoContext);
  const [orderId, setOrderId] = useState("sinId");

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });
  const navigate = useNavigate(); // Obtiene la instancia de history

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envia el pedido a FireBase
    if (totalcarrito) {
      crearOrden();
      //Limpia el formulario después de enviar los datos si es necesario.
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
      });
      agregarCarrito([]);
      //navigate("/productos");
    } else {
      toast.error("El carrito está vacio. Ud. debe cargar su carrito", {
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
  const mensajeOk = (par_OrderId) => {
    toast.success(
      "Felicitaciones!!!. Su compra ha sido exitosa. Su ID. es: " +
        par_OrderId +
        ". Tome nota del mismo para el seguimiento del envío",
      {
        position: "bottom-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };
  const dataBase = getFirestore();
  const ordersCollection = collection(dataBase, "orders");

  const crearOrden = () => {
    const total = productosCarrito.reduce(
      (acum, item) => acum + item.precioFinal,
      0
    );
    const orderData = {
      buyer: {
        name: formData.nombre,
        apellido: formData.apellido,
        telefono: formData.telefono,
        email: formData.email,
      },
      items: [...productosCarrito],
      total: total,
    };
    console.log("*****crearOrden*****");
    console.log(orderData);
    addDoc(ordersCollection, orderData).then(({ id }) => {
      console.log(id);
      setOrderId(id);
      actualizarStkItems();
      mensajeOk(id);
      navigate("/productos");
    });
  };

  //Actualizar item utiliza el array productosCarrito, donde tiene el id y la cantidad de cada Item comprado
  const actualizarStkItems = () => {
    //const ordersCollection = collection(dataBase, "productos");
    productosCarrito.map((item) => {
      const itemRef = doc(dataBase, "productos", item.id);
      getDoc(itemRef).then((documento) => {
        console.log(documento.data());
        const newStock = documento.data().stock - item.cantCarrito;
        updateDoc(itemRef, { stock: newStock });
      });

    });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <div className="border p-4 shadow mb-4">
              <h3>Total de Productos: {totalcarrito}</h3>
              <h3>Suma Total a Pagar: ${carImporteTotal.toFixed(2)}</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="border p-4 shadow">
              <h2>Ingrese sus Datos</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">
                    Apellido:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">
                    Teléfono:
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Finalizar Compra
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Orders;
