export default function Card({ accomodation }) {
  return (
    <div className="cardHome">
      <img src={accomodation.cover} alt={accomodation.tags} />
      <h2>{accomodation.title}</h2>
    </div>
  );
}
