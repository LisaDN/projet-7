import { useState } from "react";
import arrowsDown from "../assets/flecheBas.png";
import arrowsTop from "../assets/flecheHaut.png";

export default function Collapse(accommodationCollapse) {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const toggle = () => {
    //si collapse est fermé, ouvrir au clic
    if (!collapseOpen) {
      setCollapseOpen(true);
      //si collapse est ouvert fermé, fermer au clic
    } else {
      setCollapseOpen();
    }
  };

  return (
    <div className="collapse">
      <button type="button" className="collapse_button" onClick={toggle}>
        {accommodationCollapse.collapseTitle}
        {collapseOpen === true ? (
          <img className="arrowCollapse" src={arrowsTop} alt="" />
        ) : (
          <img src={arrowsDown} alt="" />
        )}
      </button>
      {collapseOpen && (
        <div className="toggle">
          <p>{accommodationCollapse.collapseInfo}</p>
        </div>
      )}
    </div>
  );
}
