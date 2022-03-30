import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../../client-config";

export default ({ node }) => {
  // console.log(node.asset.metadata.dimensions.width)

  const gatsbyImageData = getGatsbyImageData(
    node,
    { width: 700, fit: "crop", height: 600 },
    clientConfig.sanity
  );

  let imageClassName = "contentImage";

  if (node.asset.metadata.dimensions.width < 700) {
    imageClassName = imageClassName + " small";
  }

  if (node.asset.metadata.dimensions.aspectRatio > 1) {
    imageClassName = imageClassName + " landscape";
  } else {
    imageClassName = imageClassName + " portrait";
  }

  return (
    <div className="max-w-[700px] mx-auto">
      {node.caption && (
        <figure className={`${imageClassName}`}>
          <GatsbyImage image={gatsbyImageData} className="contentImage landscape2  !mx-auto" alt={node.alt} />
          <figcaption>{node.caption}</figcaption>
        </figure>
      )}

      {!node.caption && (
          <GatsbyImage image={gatsbyImageData} className="contentImage landscape2  !mx-auto" alt={node.alt} />
      )}
    </div>
  );
};
