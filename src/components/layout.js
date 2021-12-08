import React from "react";
import Header from "./header";
import Footer from "./footer";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/icons.css";
import "../styles/slick.css";
import "../styles/main.css";
import "../styles/tailwind.css";

const Layout = ({ children, doHideNav, doShowNav, showNav, siteTitle }) => (
  <div id="wrapper" className="wrapper">
    <Header siteTitle={siteTitle} showNav={showNav} doShowNav={doShowNav} doHideNav={doHideNav} />
    {/* Page Conttent */}
    {children}
    <Footer />
  </div>
);

export default Layout;
