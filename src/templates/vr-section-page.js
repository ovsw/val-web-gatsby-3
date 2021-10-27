import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import GenericPage from "../components/generic-page";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import RightSidebar from "../containers/content/right-sidebar";

// import {toPlainText} from '../lib/helpers'

const GenericPageTemplate = (props) => {
  const { data, errors, location, pageContext } = props;
  const page = data && data.page;

  //console.log("pageContext:", pageContext);

  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {page && (
        <SEO
          title={page.seoTitle || page.title || "Untitled"}
          description={page.seoDescription || ""}
          noIndex={page.seoNoIndex}
          slug={page.slug.current}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {page && (
        <RightSidebar title={page.title} path={location.pathname} headerImage={page.image}>
          {page.subSections.map((subSection, index) => {
            return <h2>{subSection.title}</h2>;
          })}
          <GenericPage {...page} />
        </RightSidebar>
      )}
    </Layout>
  );
};

export default GenericPageTemplate;

export const query = graphql`
  query VrSectionPageTemplateQuery($id: String!) {
    page: sanityVrSection(id: { eq: $id }) {
      id
      seoTitle
      seoDescription
      seoNoIndex
      title
      slug {
        current
      }
      subSections {
        id
        title
        slug {
          current
        }
      }
    }
  }
`;
