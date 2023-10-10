import React, { useContext } from 'react'
import cartCarrito from "./assets/carrito.png"
import { CarritoContext } from '../../Context/CarritoContext'

const CartWidget = ({contadorCarrito}) => {
  const {totalcarrito} = useContext(CarritoContext) 
  return (
    <div>
     {totalcarrito}
     <img src={cartCarrito} width={50} height={50} alt="img carrito"></img>
     
    </div>
  )
}

export default CartWidget
