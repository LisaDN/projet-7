import { useEffect, useState } from "react";
import stars from "../assets/stars.png";

export default function Rating({ rating }) {
  const [starsRating, setStarRating] = useState([5]);
  console.log(starsRating);

  return (
    <div>
      {starsRating.map(() => {
        <img src={stars} alt="" />;
      })}
    </div>
  );
}
