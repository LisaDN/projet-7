import starOrange from "../assets/starOrange.png";
import starGrey from "../assets/starGrey.png";

export default function Rating({ rating }) {
  const starRating = [];
  let starFull = true;
  console.log(rating);

  // mise en place boucle avec iteration 5x
  //insertion etoile si etoile rempli on pousse dans le tableau le nombre d'étoiles orange contenus dans rating
  //sinon on pousse le nombre d'etoiles vide
  for (let i = 0; i < 5; i++) {
    if (i === parseInt(rating)) {
      starFull = false;
    }
    // console.log(starFull);
    if (starFull === true) {
      starRating.push(<img key={i} src={starOrange} alt="étoile orange" />);
    } else {
      starRating.push(<img key={i} src={starGrey} alt="étoile grise" />);
    }
  }

  return <div className="starsRating">{starRating}</div>;
}
