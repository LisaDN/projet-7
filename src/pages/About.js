import Header from "../components/Header";
import Banner from "../components/Banner";
import BannerAboutImg from "../assets/kalen-emsley.jpg";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <Banner BannerImg={BannerAboutImg} />
      <main>
        <section className="collapseAboutPage">
          <div className="wrapper collapseWidthAbout">
            <Collapse
              className="collapse_content_accommodation"
              collapseTitle="Fiabilité"
              collapseInfo="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            />
            <Collapse
              collapseTitle="Respect"
              collapseInfo="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse
              collapseTitle="Service"
              collapseInfo="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            />
            <Collapse
              collapseTitle="Sécurité"
              collapseInfo="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
