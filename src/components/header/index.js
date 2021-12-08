import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// import Icon from './icon'
// import {cn} from '../lib/helpers'

import MainNav from "./mainNav";
import MobileNav from "./mobileNav";

const Header = ({ doHideNav, doShowNav, showNav, siteTitle }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteNav {
              title
              slug
              children {
                title
                slug
              }
            }
          }
        }
      }
    `
  );

  const {
    siteMetadata: { siteNav },
  } = site;

  return (
    <header className="header">
      {/*  Header Top Area  */}
      <div className="header-toparea">
        <div className="container">
          <div className="row justify-content-betwween">
            <div className="col-md-6">
              {/*  Header Logo */}
              <Link to="/" className="header-logo">
                <StaticImage
                  src="../../images/logo/va-loans-for-vets-logo.jpg"
                  alt="VA Loans For Vets"
                  placeholder="none"
                />
              </Link>
              {/* Header Logo */}
            </div>

            {/* Movile Navigation */}
            <div className="col-md-6 d-flex align-items-stretch justify-content-end">
              <MobileNav
                navStructure={siteNav}
                showNav={showNav}
                doShowNav={doShowNav}
                doHideNav={doHideNav}
              />
            </div>
            {/* END Mobile Navigation */}
          </div>
        </div>
      </div>
      {/*  Header Top Area */}

      {/*  Header Bottom Area */}
      <div className="header-bottomarea">
        <div className="container">
          <div className="header-bottom">
            {/*  Main Navigation */}
            <MainNav navStructure={siteNav} />
            {/* Main Navigation */}
          </div>
        </div>
      </div>
      {/* Header Bottom Area */}

      {/*  Mobile Menu */}
      <div className="mobile-menu-wrapper clearfix">
        <div className="container">
          <div className="mobile-menu" />
        </div>
      </div>
      {/* Mobile Menu */}
    </header>
  );
};

export default Header;
