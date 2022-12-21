import Header from "../components/Header";
import accommodationList from "../datas/accommodationList.json";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AccommodationSheet() {
  // récupération id dans l'url
  const { id } = useParams();
  console.log(id);
  const accommodation = accommodationList.find(
    (accommodationData) => accommodationData.id === id
  );
  console.log(accommodation);
  // const [accommodationD, setAccommodations] = useState({ accommodation });

  return (
    <div key={accommodation.id}>
      <Header />
      <main>
        <div className="wrapper">
          <div className="carroussel">
            <img src={accommodation.cover} alt="" />
          </div>
          <section className="accommodationLocation">
            <h1>{accommodation.title}</h1>
            <h2>{accommodation.location}</h2>
            <div className="accommodationHost">
              <p>{accommodation.host.name}</p>
              <img src={accommodation.host.picture} alt="" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
