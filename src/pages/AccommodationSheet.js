import Header from "../components/Header";
import accommodationList from "../datas/accommodationList.json";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AccommodationSheet() {
  // récupération id dans l'url
  const { id } = useParams();
  console.log(id);

  const [carroussel, setCarroussel] = useState([]);
  console.log(carroussel.tags);

  useEffect(() => {
    setCarroussel(accommodationList);
  });
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="carroussel">
          {carroussel.map((carroussel) => (
            <img key={carroussel.id} src={carroussel.pictures} alt="" />
          ))}
        </div>
        <h1>TITLE LOGEMENT</h1>
        <h2>location logement</h2>
        <div>tags</div>
      </div>
    </div>
  );
}
