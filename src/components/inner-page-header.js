import React from "react";

import { BgImage } from "gbimage-bridge";
import { getImage } from "gatsby-plugin-image";

import { useStaticQuery, graphql } from "gatsby";

const InnerPageHeader = ({ title, headerImage }) => {
  // console.log(headerImage);

  const { defaultHeaderBgImage } = useStaticQuery(
    graphql`
      query {
        defaultHeaderBgImage: file(relativePath: { eq: "bg/breadcrumb-bg-1.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 90)
          }
        }
      }
    `
  );
  const defaultHeaderBgImg = getImage(defaultHeaderBgImage);

  const customImage = headerImage ? true : false;

  const headerContent = (
    <div className="kontainer">
      <div className="in-breadcrumb">
        <div className="row align-items-center max-w-screen-md">
          <div className="col">
            <h1 className="text-white text-6xl font-bold ">{title}</h1>
            {/* <ul>
            <li><a href='index.html'>Home</a></li>
            <li>Blog</li>
          </ul> */}
          </div>
          {/* <div className='col'>
          <h6>Blog Details</h6>
        </div> */}
        </div>
      </div>
    </div>
  );

  const bgHeaderBgImage = headerImage ? getImage(headerImage.asset) : null;

  const customHeaderBgImageStack = headerImage
    ? [bgHeaderBgImage, `linear-gradient(rgba(3, 27, 56, 0.7), rgba(3, 27, 56, 0.7))`].reverse()
    : [defaultHeaderBgImg, `linear-gradient(rgba(3, 27, 56, 0.7), rgba(3, 27, 56, 0.7))`].reverse();

  return (
    <BgImage
      Tag="div"
      className="breadcrumb-area"
      image={customHeaderBgImageStack}
      backgroundColor={`#163963`}
    >
      {headerContent}
    </BgImage>
  );
};

export default InnerPageHeader;
