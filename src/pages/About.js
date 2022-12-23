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
          <Collapse
            className="collapse_content_accommodation"
            collapseTitle="Fiabilité"
            collapseInfo=""
          />
          <Collapse collapseTitle="Respect" collapseInfo="" />
          <Collapse collapseTitle="Service" collapseInfo="" />
          <Collapse collapseTitle="Responsabilité" collapseInfo="" />
        </section>
      </main>
    </div>
  );
}
