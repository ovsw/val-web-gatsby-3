import {Link} from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

function BlogPostPreviewGrid (props) {
  return (

    <div className='blogs-area in-section section-padding-bottom-lg section-padding-top-md bg-white'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title text-center'>
              {/* <h6>BEST SERVICES FOR YOU</h6> */}
              <h2>{props.title}</h2>
            </div>
          </div>
        </div>
        <div className='row blog-slider-active in-slidearrow'>

          {props.nodes &&
          props.nodes.map(node => (
            <div key={node.id} className='col-lg-4'>
              <BlogPostPreview {...node} />
            </div>
          ))}

        </div>
        {props.browseMoreHref && (
          <div className='row justify-content-center'>
            <Link to={props.browseMoreHref} type='submit' className='in-button in-button-theme mt-5'>Browse more posts</Link></div>
        )}
      </div>
    </div>

  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
