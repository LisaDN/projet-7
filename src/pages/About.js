import Header from "../components/Header";
import Banner from "../components/Banner";
import BannerAboutImg from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg";
import Collapse from "../components/Collapse";

export default function About() {
  return (
    <div className="wrapper">
      <Header />
      <Banner BannerImg={BannerAboutImg} />
      <main>
        <section className="collapseAboutPage">
          <div className="wrapper collapseWidthAbout">
            <Collapse
              className="collapse_content_accommodation"
              collapseTitle="Fiabilité"
              collapseInfo=""
            />
            <Collapse
              collapseTitle="Respect"
              collapseInfo="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse collapseTitle="Service" collapseInfo="" />
            <Collapse collapseTitle="Responsabilité" collapseInfo="" />
          </div>
        </section>
      </main>
    </div>
  );
}
