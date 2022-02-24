import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import GenericPage from "../components/generic-page";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import VrLayout from "../components/vr-section";
import PortableText from "../components/portableText";

// import {toPlainText} from '../lib/helpers'

const GenericPageTemplate = (props) => {
  const { data, errors, location, pageContext } = props;
  const page = data && data.page;

  //console.log("pageContext:", pageContext);
  console.log("page", page);

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
        <VrLayout
          title={page.title}
          section={page.subSection[0].section[0]}
          subSection={page.subSection[0]}
          image={page.image}
        >
          {page._rawBody && (
            <div className="prose prose-xl max-w-prose prose-slate">
              <PortableText blocks={page._rawBody} />
            </div>
          )}
        </VrLayout>
      )}
    </Layout>
  );
};

export default GenericPageTemplate;

export const query = graphql`
  query VrVideoPageTemplateQuery($id: String!) {
    page: sanityVrVideo(id: { eq: $id }) {
      id
      seoTitle
      seoDescription
      seoNoIndex
      title
      slug {
        current
      }
      subSection {
        id
        title
        slug {
          current
        }
        section {
          id
          title
          slug {
            current
          }
        }
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;
