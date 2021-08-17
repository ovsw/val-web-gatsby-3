import React, { useState } from "react";
import { Link } from "gatsby";

import { expandBtn } from "./mobileNavItem.module.css";

const MobileNavItem = ({ title, slug, children }) => {
  const [showSubmenu, setshowSubmenu] = useState(false);
  function toggleSubmenu() {
    if (showSubmenu) {
      setshowSubmenu(false);
    } else {
      setshowSubmenu(true);
    }
  }
  return (
    <li key={slug} className={children.length > 0 ? "in-dropdown" : ""}>
      <Link to={slug} activeStyle={{ color: "#da0000" }} partiallyActive>
        {title}
      </Link>
      {children.length > 0 && (
        <ul style={{ display: showSubmenu ? "block" : "none" }}>
          {children.map(({ title, slug }) => (
            <li key={slug}>
              <Link to={slug} activeStyle={{ color: "#da0000" }} partiallyActive>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {children.length > 0 && (
        <button className={expandBtn} onClick={toggleSubmenu}>
          +
        </button>
      )}
    </li>
  );
};

export default MobileNavItem;
