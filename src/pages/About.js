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
        <div className="wrapper">
          <Collapse />
          <Collapse />
          <Collapse />
          <Collapse />
        </div>
      </main>
    </div>
  );
}
