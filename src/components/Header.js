import logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

export default function Header({ props }) {
  return (
    <header>
      <div className="wrapper _Header">
        <img src={logo} className="kasa-logo" alt="kasa-logo" />
        <ul className="_Nav">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}
