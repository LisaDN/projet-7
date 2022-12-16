export default function Card({ accomodation }) {
  return (
    <div className="cardHome">
      <img src={accomodation.cover} alt="logement" />
      <h2>{accomodation.title}</h2>
    </div>
  );
}
