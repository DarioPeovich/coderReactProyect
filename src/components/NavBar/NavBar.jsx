import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Container>
        <img
          src="/img/electronica-BANNER.jpg"
          alt=""
          className="mt-1 img-fluid" // Clase para ajustar el ancho al 100%
          style={{ maxHeight: "200px" }} // Establece la altura máxima en píxeles
        />
      </Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Tienda Arduino</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} activeclassname="true" to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} activeclassname="true" to="/products/0">
                Productos
              </Nav.Link>

              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/products/1" style={{ color: "black" }}>
                    Microcontroladores
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link to="/products/2" style={{ color: "black" }}>
                    Accesorios
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <Link to="/products/3" style={{ color: "black" }}>
                    Kits
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  <Link to="/products/4" style={{ color: "black" }}>
                    Shields
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#link">Acerca de</Nav.Link> */}
              <Nav.Link as={NavLink} activeclassname="true" to="/cart">
                Carrito
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <NavLink to="/cart" className="nav-link">
          <CartWidget></CartWidget>
        </NavLink>
      </Navbar>
    </>
  );
}

export default NavBar;
