import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [totalItemCar, setTotalItemCar] = useState(0);

  useEffect(() => {
    let cantItemTotal = 0;
    carrito.forEach((producto) => {
      cantItemTotal = cantItemTotal + producto.cantCarrito;
    });
    setTotalItemCar(cantItemTotal);
  }, [carrito]);

  const eliminarItem = (id) => {
    const newCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(newCarrito);
  };

  const incrementarCantidad = (id) => {
    // Lógica para aumentar la cantidad de un producto en el carrito
    const updatedCarrito = carrito.map((producto) => {
      if (producto.id === id) {
        if (producto.cantCarrito < producto.stock) {
          return { ...producto, cantCarrito: producto.cantCarrito + 1 };
        }
        
      }
      return producto;
    });

    setCarrito(updatedCarrito);
  };

  const decrementarCantidad = (id) => {
    // Lógica para disminuir la cantidad de un producto en el carrito
    const updatedCarrito = carrito.map((producto) => {
      if (producto.id === id) {
        if ( producto.cantCarrito > 1) {
          return { ...producto, cantCarrito: producto.cantCarrito - 1 };
        }
        
      }
      return producto;
    });

    setCarrito(updatedCarrito);
  };
  
  // Calcular la suma total a pagar
  const sumaTotal = carrito.reduce((total, item) => total + (item.precioFinal * item.cantCarrito), 0);

  return (
    <CarritoContext.Provider value={{ productosCarrito: carrito, agregarCarrito: setCarrito, eliminarProducto: eliminarItem, totalcarrito: totalItemCar, incrementarCantidad, decrementarCantidad, carImporteTotal: sumaTotal}}>
      {children}
    </CarritoContext.Provider>
  );
};
