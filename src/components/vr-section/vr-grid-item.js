import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";

const VrGridItem = ({ description, image, link, title }) => {
  const itemThumbnail = getImage(image?.asset);
  // console.log("image from grid item:", image);
  return (
    <li className="relative">
      <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-blue-500 overflow-hidden">
        <GatsbyImage
          image={itemThumbnail}
          style={{ transition: "all 0.3s ease-in-out 0s" }}
          className="object-cover pointer-events-none group-hover:opacity-75"
          alt={image?.alt}
        />
        {/* <img
                        src={file.source}
                        alt=""
                        className="object-cover pointer-events-none group-hover:opacity-75"
                      /> */}
        <Link as="button" to={link} className="absolute inset-0 focus:outline-none" type="button">
          {/* <span className="sr-only">View details for {title}</span> */}
        </Link>
      </div>
      <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
        {title}
      </p>
      <p className="block text-sm font-medium text-gray-500 pointer-events-none">{description}</p>
    </li>
  );
};

export default VrGridItem;
