import starOrange from "../assets/starOrange.png";
import starGrey from "../assets/starGrey.png";

export default function Rating({ rating }) {
  const starRating = [];
  let starEmpty = true;
  // console.log(rating);

  for (let i = 0; i < 5; i++) {
    if (i === parseInt(rating)) {
      starEmpty = false;
    }
    if (starEmpty === true) {
      starRating.push(<img key={i} src={starOrange} alt="" />);
    } else {
      starRating.push(<img key={i} src={starGrey} alt="" />);
    }
  }

  return <div className="starsRating">{starRating}</div>;
}
