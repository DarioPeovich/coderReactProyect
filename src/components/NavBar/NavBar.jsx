import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar({contadorCarrito}) {
 // if (contadorCarrito===undefined) { contadorCarrito = 0}

  return (
    <>
      <Container>
      
        <img
          src="/img/electronica-BANNER.jpg"
          alt=""
          className="img-fluid" // Clase para ajustar el ancho al 100%
          style={{ maxHeight: '200px' }} // Establece la altura máxima en píxeles
        />
      </Container>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tienda Arduino</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} activeClassName to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} activeClassName to="/cart">Carrito</Nav.Link>
            <Nav.Link as={NavLink} activeClassName to="/products">Productos</Nav.Link>
            <Nav.Link href="#link">Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget contadorCarrito={contadorCarrito}></CartWidget>
      
    </Navbar>
    </>
  )
}

export default NavBar;