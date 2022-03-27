import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";

const VrGridItem = ({ description, image, link, title }) => {
  const itemThumbnail = getImage(image?.asset);
  // console.log("image from grid item:", image);
  return (
    <li className="relative group focus-within:ring-2 focus-within:ring-offset-4  focus-within:ring-blue-700">
      <div
        className=" block w-full aspect-w-10 aspect-h-7 
      rounded-tl-lg rounded-tr-lg
      bg-gray-100  overflow-hidden"
      >
        <GatsbyImage
          image={itemThumbnail}
          className="object-cover pointer-events-none group-hover:opacity-75 h-full transition ease-in-out duration-300"
          alt={image?.alt}
        />

        <Link as="button" to={link} className="absolute inset-0 focus:outline-none" type="button">
          <span className="sr-only">View details for {title}</span>
        </Link>
      </div>
      <div className="p-3 border space-y-2 group-hover:bg-gray-100 transition ease-in-out duration-300">
        <p className="block text-lg font-medium text-gray-900 truncate pointer-events-none group-hover:text-accent transition ease-in-out duration-300">
          {title}
        </p>
        <p className="block text-sm font-medium text-gray-500 pointer-events-none">{description}</p>
      </div>
    </li>
  );
};

export default VrGridItem;
