import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "../styles/header.css";

//Components
import Search from "./Search";

function Header({ favorites }) {
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
              <Link to="/movies" className="links">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="links">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="links">
                Favorites ({favorites.length})
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
      <Search />
    </header>
  );
}

export default Header;
