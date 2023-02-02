import Header from "../components/Header";
import accommodationList from "../datas/accommodationList.json";

import { useParams } from "react-router-dom";

import Carroussel from "../components/Carroussel";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import { Navigate } from "react-router-dom";

export default function AccommodationSheet() {
  // récupération id dans l'url
  const { id } = useParams();
  console.log(id);
  const accommodation = accommodationList.find(
    (accommodationData) => accommodationData.id === id
  );
  // console.log(accommodation);

  return (
    <div>
      {/* mise en place condition ternaire si l'id du logement se trouvant dans les paramètres de l'url ne correspond à aucun logement se trouvant dans le 
      fichier json alors redirection vers page erreur sinon affichage de la page logement */}
      {!accommodation ? (
        <Navigate to="not found" />
      ) : (
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
                    {/* mise en place boucle map pour affichage des differents tags */}
                    <div className="tagsAndNotation">
                      <ul>
                        {accommodation.tags.map((accommodationTags, index) => (
                          <li key={index}>{accommodationTags}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flexAccommodationHost">
                    <div className="accommodationHost">
                      <p>{accommodation.host.name}</p>
                      <img src={accommodation.host.picture} alt="profil hôte" />
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
                    // mise en place boucle map pour affichage en liste des infos contenus collapse equipement
                    collapseInfo={accommodation.equipments.map(
                      (accommodationsEquipments) => (
                        <li key={accommodationsEquipments}>
                          {accommodationsEquipments}
                        </li>
                      )
                    )}
                  />
                </div>
              </section>
            </div>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
