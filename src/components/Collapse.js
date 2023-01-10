import { useState } from "react";
import arrowsDown from "../assets/flecheBas.png";
import arrowsTop from "../assets/flecheHaut.png";

export default function Collapse({
  collapseTitle,
  collapseInfo,
  collapseInfoEquipments,
}) {
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
        {collapseTitle}
        {collapseOpen === true ? (
          <img className="arrowCollapse" src={arrowsTop} alt="" />
        ) : (
          <img src={arrowsDown} alt="" />
        )}
      </button>
      {collapseOpen && (
        <div className="toggle">
          <p>{collapseInfo}</p>
        </div>
      )}
    </div>
  );
}
