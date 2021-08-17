import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";

import PortableText from "./portableText";

import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";

function BlogPostPreview(props) {
  const postCoverImage = getImage(props.mainImage.asset);

  return (
    <div className="in-blog mt-30">
      <div className="in-blog-image">
        {/* <Link to={getBlogUrl(props.publishedAt, props.slug.current)}> */}
        <Link to={`/${props.slug.current}/`}>
          {props.mainImage && props.mainImage.asset && (
            <>
              <GatsbyImage
                image={postCoverImage}
                style={{ transition: "all 0.3s ease-in-out 0s" }}
                alt={props.mainImage.alt}
              />
            </>
          )}
        </Link>
      </div>
      <div className="in-blog-content">
        <div className="in-blog-metatop">
          <span>{format(props.publishedAt, "MMMM Do, YYYY")}</span>
          <span>
            <Link to={`/${props.slug.current}/`}>{props.categories[0].title}</Link>
          </span>
        </div>
        <h4 className="in-blog-title">
          <Link to={`/${props.slug.current}/`}>{props.title}</Link>
        </h4>
        {props._rawExcerpt && (
          <div>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
        <div className="in-blog-authorimage">
          <span>
            <img src="/images/blog/author-image/author-image-1.png" alt="author image" />
          </span>
        </div>
        <div className="in-blog-metabottom">
          <span>By Jimmy Vercellino</span>
          {/* <span><a href='#'><i className='zmdi zmdi-favorite-outline' /> Like : 05</a> / <a href='#'><i className='zmdi zmdi-comment-outline' />
Comment</a></span> */}
        </div>
      </div>
    </div>
  );
}

export default BlogPostPreview;
