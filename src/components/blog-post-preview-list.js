import React from 'react'
import BlogPostPreview from './blog-post-preview'
import Pagination from './pagination'

function BlogPostPreviewList ({nodes, currentPage, numPages, rootSlug}) {
  const showPagination = !(numPages < 2)

  return (
    <>
      {/* <h2 className={styles.headline}>{props.title}</h2> */}
      {showPagination && <Pagination currentPage={currentPage} numPages={numPages} rootSlug={rootSlug} />}
      <div className='mt-2 mb-5'>
        {nodes &&
          nodes.map(node => (
            <BlogPostPreview key={node.id} {...node} largeThumbs />
          ))
        }
      </div>
      {showPagination && <Pagination currentPage={currentPage} numPages={numPages} rootSlug={rootSlug} />}
    </>
  )
}

BlogPostPreviewList.defaultProps = {
  title: '',
  nodes: []
}

export default BlogPostPreviewList
