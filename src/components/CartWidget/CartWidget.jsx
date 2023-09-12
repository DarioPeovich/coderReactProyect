import React from 'react'
import cartCarrito from "./assets/carrito.png"

const CartWidget = () => {
  return (
    <div>
     <img src={cartCarrito} width={50} height={50} alt="img carrito"></img>
     0
    </div>
  )
}

export default CartWidget
