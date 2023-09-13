import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

function NavBar({contadorCarrito}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tienda Arduino</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>
            <Nav.Link href="#link">Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget contadorCarrito={contadorCarrito}></CartWidget>
    </Navbar>
  );
}

export default NavBar;