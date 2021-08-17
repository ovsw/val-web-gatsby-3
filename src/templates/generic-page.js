import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import GenericPage from '../components/generic-page'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import RightSidebar from '../containers/content/right-sidebar'

// import {toPlainText} from '../lib/helpers'

const GenericPageTemplate = props => {
  const {data, errors, location} = props
  const page = data && data.page

  return (
    <Layout>
      {errors && <SEO seoTitle='GraphQL Error' />}
      {page && <SEO seoTitle={page.seoTitle || page.title || 'Untitled'} description={page.seoDescription || ''} noIndex={page.seoNoIndex != null} slug={page.slug.current} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {page && <RightSidebar title={page.title} path={location.pathname}><GenericPage {...page} /></RightSidebar>}
    </Layout>
  )
}

export default GenericPageTemplate

export const query = graphql`
  query GenericPageTemplateQuery($id: String!) {
    page: sanityPage(id: {eq: $id}) {
      id
      seoTitle
      seoDescription
      seoNoIndex
      title
      slug {
        current
      }
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`
