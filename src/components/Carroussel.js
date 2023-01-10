import { useEffect, useState } from "react";
import arrowRight from "../assets/chevron-droit.png";
import arrowLeft from "../assets/chevron-gauche.png";

export default function Carroussel({ pictures }) {
  const [slide, setSlide] = useState(0);
  const currentSlide = pictures[slide];
  // console.log(slide);

  // fonctions pour les flèches
  const clickNext = () => {
    const lastSlide = slide === pictures.length - 1;
    const newSlide = lastSlide ? 0 : slide + 1;
    setSlide(newSlide);
  };
  const clickPrevious = () => {
    const firstSlide = slide === 0;
    const newSlide = firstSlide ? pictures.length - 1 : slide - 1;
    setSlide(newSlide);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((slide + 1) % pictures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slide, pictures]);

  return (
    <div className="carroussel">
      <img src={[currentSlide]} alt="" />

      <div className="arrows">
        <button type="button" onClick={clickPrevious}>
          <img src={arrowLeft} alt="" />
        </button>
        <button type="button" onClick={clickNext}>
          <img src={arrowRight} alt="" />
        </button>
      </div>
      <div className="countSlides">
        <p>
          {[slide + 1]}/{[pictures.length]}
        </p>
      </div>
    </div>
  );
}
