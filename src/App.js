import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import {getArchJsonProductos} from "./asynMock.js"
import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import Productos from "./Pages/Productos/Productos";
import Cart from "./Pages/Cart/Cart";
import Item from "./Pages/Item/Item";
import Footer from "./components/Footer/Footer";
//import './App.css';


function App() {
  const [contador, setContador] = useState(0);
  

  function sumaItem() {
    setContador(contador + 1);
  }
  function restaItem() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }



  return (
    <BrowserRouter className="App">
      <NavBar contadorCarrito={contador}></NavBar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/products' element={<Productos/>}/>
        <Route path='/products/:itemId' element={<Item/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;



// {/* <div>
// <NavBar contadorCarrito={contador}></NavBar>
// <ItemListContainer saludo={"Bienvenidos!!!"} />
// <br />
// <br />
// <div className="text-center">
//   <button className="btn btn-success btn-block m-2" onClick={sumaItem}>
//     Agregar al Carrito
//   </button>
//   <button className="btn btn-danger btn-block" onClick={restaItem}>
//     Borra Item
//   </button>
// </div>
// <Listado productos={productos} />
// </div> */}