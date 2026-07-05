import "../styles/navbar.css";
import { site } from "../content/site";
import logo from "../assets/jgp1.jpg";

export default function Navbar() {
  return (
    <nav>
      <a href="#home" className="navbar-brand">
        <img
          src={logo}
          alt={site.name}
          className="navbar-logo-img"
        />
      </a>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#companies">Companies</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
