//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import './App.css';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer saludo={"Bienvenidos!!!"}/>
    </div>
  );
}

export default App;
