import { useEffect, useState } from "react";

export default function Collapse(accommodationCollapse) {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const toggle = () => {
    setCollapseOpen(true);
  };

  return (
    <div className="collapse">
      <button type="button" className="collapse_button" onClick={toggle}>
        {accommodationCollapse.collapseTitle}
      </button>
      {collapseOpen && (
        <div className="toggle">
          <p>{accommodationCollapse.collapseInfo}</p>
        </div>
      )}
    </div>
  );
}
