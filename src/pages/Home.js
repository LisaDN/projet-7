import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className="D_Home">
      <Header />
      <div className="_Body">
        <section className="_Section1">
          {/* ici component banniere */}
          <Banner className="BannerHome" />
        </section>
        <section className="Gallery">
          {/* ici cards photos galleries */}
        </section>
      </div>
    </div>
  );
}

//autre façon de faire un composant et de l'exporter
// const Home = () => {
//   return (
//     <div>
//      <Header />
//     </div>
//   );
// };
// export default Home;
