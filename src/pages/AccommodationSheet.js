import Header from "../components/Header";
import accommodationList from "../datas/accommodationList.json";

import { useParams } from "react-router-dom";

import Carroussel from "../components/Carroussel";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

export default function AccommodationSheet() {
  // récupération id dans l'url
  const { id } = useParams();
  console.log(id);
  const accommodation = accommodationList.find(
    (accommodationData) => accommodationData.id === id
  );
  // console.log(accommodation);

  return (
    <div key={accommodation.id}>
      <Header />
      <main>
        <div className="wrapper">
          <Carroussel pictures={accommodation.pictures} />

          <section className="accommodationLocation">
            <div className="flexAccommodationTitle">
              <div className="accommodationName">
                <h1>{accommodation.title}</h1>
                <h2>{accommodation.location}</h2>

                <div className="tagsAndNotation">
                  <ul>
                    {accommodation.tags.map((accommodationTags) => (
                      <li key={accommodationTags.id}>{accommodationTags}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flexAccommodationHost">
                <div className="accommodationHost">
                  <p>{accommodation.host.name}</p>
                  <img src={accommodation.host.picture} alt="" />
                </div>
                <Rating rating={accommodation.rating} />
              </div>
            </div>
          </section>
          <section>
            <div className="wrapper collapseAccommodationPage">
              <Collapse
                collapseTitle="Description"
                collapseInfo={accommodation.description}
              />
              <Collapse
                collapseTitle="Equipements"
                collapseInfo={accommodation.equipments.map(
                  (accommodationEquipments) => (
                    <ul>
                      <li key={accommodationEquipments.id}>
                        {accommodationEquipments}
                      </li>
                    </ul>
                  )
                )}
              />
            </div>
          </section>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
