import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import RightSidebar from '../containers/content/right-sidebar'
import BlogPostPreviewList from '../components/blog-post-preview-list'

// import {toPlainText} from '../lib/helpers'

const CategoryPageTemplate = props => {
  const {data, errors, pageContext: {catCurrentPage, catNumPages, categorySlug}} = props
  const page = data && data.page

  const posts = data && data.posts
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  return (
    <Layout>
      {errors && <SEO seoTitle='GraphQL Error' />}
      {page && <SEO seoTitle={page.seoTitle || page.title || 'Untitled'} description={page.seoDescription || ''} slug={categorySlug} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {posts &&
      <RightSidebar title={page.title} noBlogLink>
        <BlogPostPreviewList title='Category Posts'
          rootSlug={`/${categorySlug}`}
          nodes={postNodes}
          currentPage={catCurrentPage}
          numPages={catNumPages} />
      </RightSidebar>}

    </Layout>
  )
}

export default CategoryPageTemplate

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query CategoryPageTemplateQuery($categoryId: String!, $skip: Int!, $limit: Int!) {
    posts: allSanityPost(
      sort: {fields: [publishedAt]
      order: DESC}
      filter: {categories: {elemMatch: {id: {eq: $categoryId}}}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          categories {
            title
          }
          publishedAt
          mainImage {
            ...SanityImage
            alt
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
    page: sanityCategory(id: {eq: $categoryId}) {
      title
      seoTitle
      seoDescription
    }
  }

  
`
