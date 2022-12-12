import "../styles/Header.css";
import logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

export default function Header({ props }) {
  return (
    <header className="_Header">
      <img src={logo} className="kasa-logo" alt="kasa-logo" />
      <nav className="_Nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="A-Propos">A Propos</NavLink>
      </nav>
    </header>
  );
}
