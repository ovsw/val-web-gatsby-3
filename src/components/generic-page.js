import React from "react";
// import {buildImageObj} from '../lib/helpers'
// import {imageUrlFor} from '../lib/image-url'
import PortableText from "./portableText";
// import Container from './container'
// import AuthorList from './author-list'

// import styles from './blog-post.module.css'

function GenericPage(props) {
  const { _rawBody, title } = props;
  return (
    <div>
      {/* <h1>{title}</h1> */}
      <div className="prose prose-xl max-w-full px-4 lg:px-0">
        {_rawBody && <PortableText blocks={_rawBody} />}
      </div>

      <div className="in-blog-metabottom mt-30">
        {/* <span><a href='#'><i className='zmdi zmdi-favorite-outline' /> Like : 08</a> / <a href='#'><i className='zmdi zmdi-comment-outline' />Comment</a></span> */}
      </div>
    </div>
  );
}

export default GenericPage;
