import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

import Service from "./service";

const ServicesArea = ({ sectionTitle = "Missing Title", sectionSubtitle, cardsContent }) => {
  const { sectionBg } = useStaticQuery(
    graphql`
      query {
        sectionBg: file(relativePath: { eq: "bg/bg-shape.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1400, quality: 80)
          }
        }
      }
    `
  );

  const servicesAreaBgImage = getImage(sectionBg);

  return (
    <BgImage
      Tag="div"
      className="services-area in-section section-padding-lg"
      image={servicesAreaBgImage}
      backgroundColor={`#FFFFFF`}
      fadeIn={false}
    >
      <div className="kontainer">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              {sectionSubtitle && <h6>{sectionSubtitle}</h6>}
              <h2>{sectionTitle}</h2>
              <p>With a VA Home Loan Specialist, the process just got easier!</p>
            </div>
          </div>
        </div>
        <div className="row">
          {cardsContent.map((serviceProps, index) => (
            <Service key={index} {...serviceProps} />
          ))}
        </div>

        <div className="row justify-content-center">
          <Link
            to="/obtaining-a-va-home-loan/"
            type="submit"
            className="in-button in-button-theme mt-5"
          >
            Learn More
          </Link>
        </div>
      </div>
    </BgImage>
  );
};

export default ServicesArea;
