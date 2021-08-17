import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import {toPlainText} from '../lib/helpers'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import RightSidebar from '../containers/content/right-sidebar'
import BlogPost from '../components/blog-post'

const BlogPostTemplate = props => {
  const {data, errors} = props
  const post = data && data.post
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {post && <SEO title={post.seoTitle || post.title || 'Untitled'} description={post.seoDescription || toPlainText(post._rawExcerpt)} image={post.mainImage} noIndex={post.seoNoIndex != null} slug={post.slug.current} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <RightSidebar title={post.title}><BlogPost {...post} /></RightSidebar>}
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      seoTitle
      seoDescription
      seoNoIndex
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
      authors {
        _key
        author {
          image {
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
          name
        }
      }
    }
  }
`
