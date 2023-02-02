import { NavLink } from "react-router-dom";

export default function Card({ accommodation }) {
  return (
    // Navlink correspond à balise <a></a> redirection au clic vers la page du logement correspondand
    // en y mettant l'id en paramètre url
    <NavLink className="cardHome" to={`/accommodation/${accommodation.id}`}>
      <img src={accommodation.cover} alt={accommodation.tags} />
      <div className="backgroundLinear"></div>
      <h2>{accommodation.title}</h2>
    </NavLink>
  );
}
