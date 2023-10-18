import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import {getArchJsonProductos} from "./asynMock.js"
//import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import Productos from "./Pages/Productos/Productos";
import Cart from "./Pages/Cart/Cart";
import Item from "./Pages/Item/Item";
import Footer from "./components/Footer/Footer";
import { CarritoProvider } from "./Context/CarritoContext";
import Orders from "./Pages/Orders/Orders";
//import './App.css';

function App() {

  return (
    <BrowserRouter className="App">
      <CarritoProvider>
        <NavBar ></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Productos />} />
          <Route path="/products/:itemId" element={<Item />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </CarritoProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


