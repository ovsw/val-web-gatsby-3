import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby";

import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

import SocialLinks from "../components/social-links";

const Footer = () => {
  const { footerBg } = useStaticQuery(
    graphql`
      query {
        footerBg: file(relativePath: { eq: "bg/footer-bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1400, quality: 80)
          }
        }
      }
    `
  );

  const footerBgImage = getImage(footerBg);

  const backgroundImageStack = [
    footerBgImage,
    `linear-gradient(rgba(3, 27, 56, 0.8), rgba(3, 27, 56, 0.8))`,
  ].reverse();

  return (
    <footer className="footer">
      {/* Footer Contact Area */}
      <div className="footer-contact-area">
        <div className="container">
          <div className="footer-contact">
            {/* <div className='row'> */}
            <p className="footer-contact-block" style={{ marginBottom: "0" }}>
              My mission is to provide and assist all veterans and active-duty military with all
              their VA Home Loan financing needs. I serve men and women in Phoenix, Scottsdale,
              Tempe, Chandler, Gilbert, and nationwide. If you want to settle down and provide your
              family with the home they’ve always wanted, don’t hesitate to contact me. I’ll be here
              to guide you every step of the way
            </p>
            {/* <div className='col'>
              <div className='footer-contact-block'>
                <span className='footer-contact-icon'>
                  <i className='zmdi zmdi-phone' />
                </span>
                <p><a href='#'>+0884567863</a><br /><a href='#'>+0884567863</a></p>
              </div>
            </div>
            <div className='col'>
              <div className='footer-contact-block'>
                <span className='footer-contact-icon'>
                  <i className='zmdi zmdi-home' />
                </span>
                <p>958 Lilyan Junction, Mitchellmouth, Rwanda</p>
              </div>
            </div>
            <div className='col'>
              <div className='footer-contact-block'>
                <span className='footer-contact-icon'>
                  <i className='zmdi zmdi-email' />
                </span>
                <p><a href='#'>info@example.com</a><br /><a href='#'>info2@example.com</a></p>
              </div>
            </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* // Footer Contact Area */}

      {/* Footer Inner */}
      <BgImage
        Tag="div"
        className="footer-inner"
        image={backgroundImageStack}
        backgroundColor={`#163963`}
      >
        {/* <div className='' data-secondary-overlay='8'> */}

        {/* Footer Widgets Area */}
        <div className="footer-widgets-area section-padding-lg">
          <div className="container">
            <div className="row widgets footer-widgets">
              <div className="col-lg-5 col-md-6">
                <div className="single-widget widget-info">
                  <div className="logo">
                    <StaticImage
                      src="../images/logo/GWBLogoTeamVERCELLINO-400.jpg"
                      alt="GoldWater Bank Logo"
                      placeholder="none"
                    />
                  </div>
                  <p>
                    Goldwater Bank N.A. – Mortgage Division,
                    <br /> NMLS #452955.
                  </p>
                  <p>
                    3602 E Campbell Ave,
                    <br /> Phoenix, AZ 85018 <br />
                    Phone: <a href="tel:602-908-5849">602-908-5849</a> | Fax: 480-569-1363
                  </p>
                  <ul className="footer-socialicons">
                    <SocialLinks />
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-3">
                <div className="single-widget widget-info">
                  <ul className="footer-nav">
                    <li>
                      <a
                        href="https://goldwaterbank.mymortgage-online.com/?loanapp&siteid=4884527613&lar=wstar_jvercellin&workFlowId=29714"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Application Login
                      </a>
                    </li>
                    <li>
                      <Link to="/apply/">VA Application Process</Link>
                    </li>
                    <li>
                      <Link to="/va-loan-eligibility/">VA Loan Eligibility</Link>
                    </li>
                    <li>
                      <Link to="/va-jumbo-loans/">VA Jumbo Loan</Link>
                    </li>
                    <li>
                      <Link to="/va-loan-app-free-mobile-tool/">VA Loan Apps</Link>
                    </li>
                    <li>
                      <Link to="/types-of-loans/">Types of VA Loans</Link>
                    </li>
                    <li>
                      <Link to="/loan-checklist/">VA Loan Checklist</Link>
                    </li>
                    <li>
                      <Link to="/refinancing/">VA Refinance</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="single-widget widget-info" style={{ textAlign: "center" }}>
                  <a
                    href="https://www.vietnamwar50th.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StaticImage
                      src="../images/logo/Vietnam-War-Commemoration-Logo.png"
                      alt="Vietnam War Commemoration Logo"
                      placeholder="none"
                    />
                  </a>
                </div>
              </div>

              {/* <div className='col-lg-2 col-md-6'>
              <div className='single-widget widget-links'>
                <h4 className='widget-title'>
                  <span>Policy</span>
                </h4>
                <ul>
                  <li><a href='#'>Term</a></li>
                  <li><a href='#'>Licenses</a></li>
                  <li><a href='#'>Fund</a></li>
                  <li><a href='#'>Support</a></li>
                  <li><a href='#'>Security</a></li>
                </ul>
              </div>
            </div> */}

              {/* <div className='col-lg-3 col-md-6'>
              <div className='single-widget widget-latestblog'>
                <h4 className='widget-title'>
                  <span>Latest Blog</span>
                </h4>
                <ul>
                  <li>
                    <div className='widget-latestblog-image'>
                      <a href='blog-details.html'>
                        <img src='/images/blog/thumbnails/blog-thumbnail-1.png' alt='blog thumbnail' />
                      </a>
                    </div>
                    <span>1st Janu, 2018</span>
                    <h5><a href='blog-details.html'>Ipsam rerum nisi beatae et</a></h5>
                  </li>
                  <li>
                    <div className='widget-latestblog-image'>
                      <a href='blog-details.html'>
                        <img src='/images/blog/thumbnails/blog-thumbnail-2.png' alt='blog thumbnail' />
                      </a>
                    </div>
                    <span>1st Janu, 2018</span>
                    <h5><a href='blog-details.html'>Ipsam rerum nisi beatae et</a></h5>
                  </li>
                </ul>
              </div>
            </div> */}

              {/* <div className='col-lg-4 col-md-6'>
              <div className='single-widget widget-newsletter'>
                <h4 className='widget-title'>
                  <span>Newsletter</span>
                </h4>
                <p>Lorem ipsum dolor sit amet, coadipisicint, sed do eiusmod tempor incididunt</p>
                <form action='#' className='widget-newsletter-form'>
                  <input type='text' placeholder='Your email...' />
                  <button type='submit'><img src='/images/icons/paper-plane-white.png' alt='send' /></button>
                </form>
              </div>
            </div> */}
            </div>
            {/* end row */}

            <div className="row mt-50">
              <div className="col-12">
                <h6 className="h4" style={{ color: "white" }}>
                  CIP Disclosure
                </h6>
                <p style={{ fontSize: "0.8rem", lineHeight: "1.2rem", color: "lightgray" }}>
                  Important Information about Procedures for Opening a New Account To help the
                  government fight the funding of terrorism and money laundering activities, Federal
                  law requires all financial institutions to obtain, verify, and record information
                  that identifies each person who opens an account (e.g., establishes a formal
                  relationship by means of a loan application) What this means for you: When you
                  open an account, we will ask for your name, address, date of birth, and other
                  information that will allow us to identify you. We may also ask to see your
                  driver's license or other identifying documents.
                </p>
                <p>
                  <a
                    href="http://www.nmlsconsumeraccess.org/"
                    style={{ marginRight: "1rem" }}
                    title="NML Consumer Access"
                    rel="noopener noreferrer"
                  >
                    <StaticImage
                      src="../images/logo/ico2.png"
                      alt="NML Consumer Access Logo"
                      placeholder="none"
                      as="span"
                    />
                  </a>
                  <StaticImage
                    src="../images/logo/equal-housing-opportunity-logo.png"
                    alt="Equal Housing Opportunity Logo"
                    title="Equal Housing Opportunity"
                    placeholder="none"
                    as="span"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* // Footer Widgets Area */}

        {/* Footer Copyright Area */}
        <div className="footer-copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-12">
                <p className="copyright-text">
                  &copy; {new Date().getFullYear()} &copy;{" "}
                  <a href="#">Jimmy Vercellino NMLS #184169</a>, All Rights Reserved <br /> Website
                  by{" "}
                  <a href="https://ovswebsites.com/" style={{ color: "red" }}>
                    OvS Websites
                  </a>
                </p>
              </div>
              <div className="col-lg-5 col-12">
                <ul className="copyright-links">
                  <li>
                    <Link to="/ada-compliance/">ADA Compliance</Link>
                  </li>
                  <li>
                    <Link to="/terms-service-privacy-policy/">TOC/Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* // Footer Copyright Area */}
      </BgImage>
      {/* // Footer Inner */}
    </footer>
  );
};

export default Footer;
