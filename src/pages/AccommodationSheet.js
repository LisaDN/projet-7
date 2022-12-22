import Header from "../components/Header";
import accommodationList from "../datas/accommodationList.json";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Carroussel from "../components/Carroussel";

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
          <Carroussel pictures={accommodation.pictures} />

          <section className="accommodationLocation">
            <h1>{accommodation.title}</h1>
            <h2>{accommodation.location}</h2>
            <div className="accommodationHost">
              <div>
                <p>{accommodation.host.name.split(" ")[0]}</p>
                <br />
                <p>{accommodation.host.name.split(" ")[1]}</p>
              </div>
              <img src={accommodation.host.picture} alt="" />
            </div>
            <div className="tagsAndNotation">
              <ul>
                <li>{accommodation.tags}</li>
              </ul>
              <div className="ratings">stars</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
