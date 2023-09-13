//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';
//import './App.css';

function App() {
  const [contador, setContador] = useState(0)

  function sumaItem() {
    setContador(contador + 1)
  }
  function restaItem() {
    if (contador > 0) {
      setContador(contador - 1)
    }

  }

  return (
    <div>
      <NavBar contadorCarrito={contador}></NavBar>
      <ItemListContainer saludo={"Bienvenidos!!!"} />
      <br />
      <br />
      <div className="text-center">
        <button className="btn btn-success btn-block m-2" onClick={sumaItem}>Agregar al Carrito</button>
        <button className="btn btn-danger btn-block" onClick={restaItem}>Borra Item</button>
      </div>
    </div>
  );
}

export default App;
