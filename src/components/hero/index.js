import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

import { customHeroSliderBg, customContainer, customRow, sliderContent } from "./index.module.css";

const Hero = () => {
  const { heroBG } = useStaticQuery(
    graphql`
      query {
        heroBG: file(relativePath: { eq: "bg/background-image-3s.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 80)
          }
        }
      }
    `
  );

  const heroBgImage = getImage(heroBG);

  return (
    <>
      <div className="heroslider ">
        <BgImage
          Tag="div"
          className={`heroSliderBg d-flex align-items-center ${customHeroSliderBg}`}
          image={heroBgImage}
          backgroundColor={`#163963`}
          loading="eager"
          // fadeIn={false}
        >
          <div className={`container ${customContainer}`}>
            <div className={`row ${customRow}`}>
              <div className="col-lg-10">
                <div className={`heroslider-content ${sliderContent}`}>
                  <h1>
                    <span>
                      From Marine to <br />
                      VA Loan Specialist
                    </span>{" "}
                    Jimmy Vercellino
                  </h1>
                  <p>
                    I want to be your trusted advisor and get you homeownership. <br /> Click below
                    to start the VA Home Loan Journey.
                  </p>
                  <div className="heroslider-buttonholder">
                    <Link to="/apply/" className="in-button in-button-theme">
                      Apply Now
                    </Link>
                    <Link to="/my-story/" className="in-button in-button-colorwhite">
                      My Story
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BgImage>
      </div>
    </>
  );
};

export default Hero;
