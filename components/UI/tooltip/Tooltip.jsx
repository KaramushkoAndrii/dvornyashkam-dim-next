"use client";

import { useState } from "react";
import "./tooltip.scss";

const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onTouchStart={() => setVisible(true)}
      onTouchEnd={() => setVisible(false)}
    >
      {children}
      <div className={`tooltip__popup ${visible ? "visible" : ""}`}>{text}</div>
    </div>
  );
};

export default Tooltip;
