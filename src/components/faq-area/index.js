import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

import QA from "./qa";

const FAQArea = ({ sectionTitle, sectionSubtitle, faqContent }) => {
  const { sectionBg } = useStaticQuery(
    graphql`
      query {
        sectionBg: file(relativePath: { eq: "bg/background-image-1.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 90)
          }
        }
      }
    `
  );

  const faqSectionBgImage = getImage(sectionBg);

  const backgroundImageStack = [
    faqSectionBgImage,
    `linear-gradient(rgba(3, 27, 56, 0.9), rgba(3, 27, 56, 0.9))`,
  ].reverse();

  return (
    <BgImage
      Tag="div"
      className="calltoaction-area in-section section-padding-lg dark"
      image={backgroundImageStack}
      backgroundColor={`#163963`}
      fadeIn={false}
    >
      <div className="kontainer">
        <div className="row justify-content-center in-cta">
          <div className="col-lg-8">
            <div className="section-title text-center">
              {sectionSubtitle && <h6>{sectionSubtitle}</h6>}
              <h2>{sectionTitle}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="faequently-accordion">
              {faqContent &&
                faqContent.map((QandA, index) => <QA key={index} item={index + 1} {...QandA} />)}
            </div>
          </div>
        </div>
      </div>
    </BgImage>
  );
};

export default FAQArea;
