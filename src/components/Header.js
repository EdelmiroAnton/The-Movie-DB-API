import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "../styles/header.css";

//Components
import Search from "./Search";

function Header({ favorites, token }) {
  function logout() {
    sessionStorage.clear();
  }

  return (
    <header className="header_container">
      <Navbar expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar_items">
            <li>
              {!token && (
                <Link onClick={logout} className="links" to={"/"}>
                  Log Out
                </Link>
              )}
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
                Favorites
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
