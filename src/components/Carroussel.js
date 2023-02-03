import { useEffect, useState } from "react";
import arrowRight from "../assets/chevron-droit.png";
import arrowLeft from "../assets/chevron-gauche.png";

export default function Carroussel({ pictures }) {
  // stockage dans etat index actuel de la diapositive qui sera à 0
  // stockage des images dans un tableau qui prend l'etat initiale et permettra d'afficher la 1ère image
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
  // mise en place défilement automatique Carroussel toutes les 3secondes
  // incremente de 1 toute les 3s
  //% pictures.length va permette une fois arriver à la fin du tableau de recommencer le défilement auto des images
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((slide + 1) % pictures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slide, pictures]);

  return (
    <div className="carroussel">
      <img src={[currentSlide]} alt={currentSlide} />
      {/* si le carroussel contient plus d'une image : affichage div contenant boutons : next et previous sinon enlever div boutons */}
      {pictures.length > 1 ? (
        <div className="arrows">
          <button type="button" onClick={clickPrevious}>
            <img src={arrowLeft} alt="photos précédentes" />
          </button>
          <button type="button" onClick={clickNext}>
            <img src={arrowRight} alt="photos suivantes" />
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="countSlides">
        {pictures.length > 1 ? (
          <p>
            {[slide + 1]}/{[pictures.length]}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
