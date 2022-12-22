import { useEffect, useState } from "react";

export default function Collapse({ accommodation }) {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const to = () => {
    setCollapseOpen(true);
  };

  return (
    <div className="collapse">
      <button type="button" className="collapse_button" onClick={to}></button>
      <div className="collapse_content"></div>
    </div>
  );
}
