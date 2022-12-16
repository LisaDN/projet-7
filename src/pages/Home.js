import Header from "../components/Header";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import BannerImg from "../assets/IMG.jpg";
import accommodationsList from "../datas/accommodationList.json";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  const [accommodations, setAccomodations] = useState([]);

  useEffect(() => {
    setAccomodations(accommodationsList);
  });
  return (
    <div>
      <Header />
      <Banner BannerImg={BannerImg} />
      <main>
        <div className="wrapper card">
          {accommodations.map((accommodation) => (
            <Card key={accommodation.id} accomodation={accommodation} />
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

//autre façon de faire un composant parent et de l'exporter
// const Home = () => {
//   return (
//     <div>
//      <Header />
//     </div>
//   );
// };
// export default Home;
