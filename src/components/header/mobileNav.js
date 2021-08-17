import React from "react";
import MobileNavItem from "./mobileNavItem";

import { mobileNavContainer, hamburgerBtn, mobileNav } from "./mobileNav.module.css";

const Mobilenav = ({ navStructure, showNav, doShowNav, doHideNav }) => {
  function toggleNav() {
    if (showNav) {
      doHideNav();
    } else {
      doShowNav();
    }
  }

  return (
    <div className={`${mobileNavContainer} mobile-menu-wrapper clearfix`}>
      <button className={`${hamburgerBtn} meanmenu-reveal`} onClick={toggleNav}>
        <i className="zmdi zmdi-menu" />
      </button>

      <nav className={mobileNav} style={{ display: showNav === true ? "block" : "none" }}>
        <ul>
          {navStructure.map((itemProps, i) => (
            <MobileNavItem key={i} {...itemProps} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Mobilenav;
