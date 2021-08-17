import React from "react";
// import Img from 'gatsby-image'
// import { getFluidGatsbyImage } from "gatsby-source-sanity";

import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../../client-config";

export default ({ node }) => {
  // console.log(node.asset.metadata.dimensions.width)

  // let fluidProps = getFluidGatsbyImage(
  //   node.asset._id,
  //   {maxWidth: 730},
  //   clientConfig.sanity
  // )

  const gatsbyImageData = getGatsbyImageData(
    node,
    { width: 730, fit: "crop", height: 600 },
    clientConfig.sanity
  );

  let imageClassName = "contentImage";

  if (node.asset.metadata.dimensions.width < 700) {
    // fluidProps = getFluidGatsbyImage(node.asset._id, { maxWidth: 400 }, clientConfig.sanity);
    imageClassName = imageClassName + " small";
  }

  if (node.asset.metadata.dimensions.aspectRatio > 1) {
    imageClassName = imageClassName + " landscape";
  } else {
    imageClassName = imageClassName + " portrait";
  }

  return (
    <>
      {node.caption && (
        <figure className={imageClassName}>
          {/* <Img fluid={fluidProps} alt={node.alt} /> */}
          <GatsbyImage image={gatsbyImageData} className="contentImage landscape2" alt={node.alt} />
          <figcaption>{node.caption}</figcaption>
        </figure>
      )}

      {!node.caption && (
        <GatsbyImage image={gatsbyImageData} className="contentImage landscape2" alt={node.alt} />
      )}
    </>
  );
};
