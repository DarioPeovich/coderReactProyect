import React from 'react'
import cartCarrito from "./assets/carrito.png"

const CartWidget = ({contadorCarrito}) => {
  return (
    <div>
     {contadorCarrito} 
     <img src={cartCarrito} width={50} height={50} alt="img carrito"></img>
     
    </div>
  )
}

export default CartWidget
