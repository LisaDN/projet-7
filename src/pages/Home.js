import Header from "../components/Header";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import BannerImg from "../assets/IMG.jpg";
import accommodationsList from "../datas/accommodationList.json";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";

export default function Home() {
  const [accommodations, setAccommodations] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [accommodationsPerPage] = useState(7);
  const indexOfLastAccommodation = currentPage * accommodationsPerPage;
  const indexOfFirstAccommodation = currentPage - accommodationsPerPage;

  useEffect(() => {
    setAccommodations(accommodationsList);
  }, [setAccommodations]);

  const currentAccommodations = accommodations.splice(
    indexOfFirstAccommodation,
    indexOfLastAccommodation
  );
  console.log(currentAccommodations);
  console.log(accommodationsList);
  // const pages = Math.ceil(accommodations.length / accommodationsPerPage);

  return (
    <div>
      <Header />
      <Banner
        BannerImg={BannerImg}
        BannerTitle="  Chez vous, partout et ailleurs"
      />
      <main>
        <div className="wrapper card">
          {currentAccommodations.map((accommodation) => (
            <Card key={accommodation.id} accommodation={accommodation} />
          ))}
          <Pagination
            accommodationsPerPage={accommodationsPerPage}
            totalPosts={accommodations.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
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
