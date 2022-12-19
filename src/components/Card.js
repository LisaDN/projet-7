import { NavLink } from "react-router-dom";

export default function Card({ accomodation }) {
  return (
    <NavLink className="cardHome" to="/accomodation/:id">
      <img src={accomodation.cover} alt={accomodation.tags} />
      <h2>{accomodation.title}</h2>
    </NavLink>
  );
}
