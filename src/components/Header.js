import { Link } from "react-router-dom";
import { Navbar} from "react-bootstrap";
import "../styles/header.css";

//Components
import Buscador from "./Buscador";

function Header() {
  return (
    <header className="header_container">
      <Navbar expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar_items">
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/listado" className="links">
                Listado
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="links">
                Contacto
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
        <Buscador/>
      </Navbar>
    </header>
  );
}

export default Header;
