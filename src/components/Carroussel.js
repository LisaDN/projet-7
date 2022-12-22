import { useEffect, useState } from "react";
import arrowRight from "../assets/chevron-droit.png";
import arrowLeft from "../assets/chevron-gauche.png";

export default function Carroussel({ pictures }) {
  const [count, setCount] = useState(0);
  console.log(count);

  // fonctions pour les flèches
  const clickNext = () => {
    const lastSlide = count === -1;
    const newSlide = lastSlide ? 0 : count + 1;
    setCount(newSlide);
  };
  const clickPrevious = () => {
    const firstSlide = count === 0;
    const newSlide = firstSlide ? pictures.length - 1 : count - 1;
    setCount(newSlide);
  };
  return (
    <div className="carroussel">
      <img src={pictures[0]} alt="" />

      <div className="arrows">
        <button type="button" onClick={clickPrevious}>
          <img src={arrowLeft} alt="" />
        </button>
        <button type="button" onClick={clickNext}>
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </div>
  );
}
