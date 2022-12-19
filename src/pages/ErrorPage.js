import Header from "../components/Header";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <Header />
      <div className="wrapper center">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </div>
    </div>
  );
}
