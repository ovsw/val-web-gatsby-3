import React from "react";
import { Link } from "gatsby";

import { root, heading } from "./cta.module.css";

const CTA = ({ title, text, url }) => {
  return (
    <div className="py-4">
      {/* <div className="py-3">
        <div className="side-cta">
          <Link to={url} className="side-apply">
            <h2 className={heading}>
              <span>{title}</span>
            </h2>
            <p>{text}</p>
          </Link>
        </div>
      </div> */}
      <Link to={url} className="in-button in-button-theme2 mb-3 ">
        <h2>
          <span>{title}</span>
        </h2>
      </Link>
      <p className="pl-2 max-w-xs">{text}</p>
    </div>
  );
};

export default CTA;
