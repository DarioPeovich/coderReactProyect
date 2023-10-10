import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [totalItemCar, setTotalItemCar] = useState(0);

    useEffect(() => {
        setTotalItemCar(carrito.length);
    }, [carrito])

    const eliminarItem = (id) => {
        const newCarrito = carrito.filter(producto => producto.id !== id);
        setCarrito(newCarrito);
    }

    return (
        <CarritoContext.Provider value={{productosCarrito:carrito, agregarCarrito:setCarrito, eliminarProducto:eliminarItem, totalcarrito:totalItemCar }}>
            {children}
        </CarritoContext.Provider>
    )
}