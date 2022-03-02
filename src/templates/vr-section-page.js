import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import RightSidebar from "../containers/content/right-sidebar";
import VrGridItem from "../components/vr-section/vr-grid-item";
import PortableText from "../components/portableText";

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
          <div className="prose prose-xl max-w-screen-xl">
            {page._rawBody && <PortableText blocks={page._rawBody} />}
          </div>
          <ul role="list" className="grid pt-8 grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6  xl:gap-x-8">
            {page.subSections.map((videoSubSection, i) => {
              return (
                <VrGridItem
                  key={i}
                  image={videoSubSection.image}
                  title={videoSubSection.title}
                  description={videoSubSection.description}
                  link={`/video/${videoSubSection.slug.current}`}
                />
              );
            })}
          </ul>
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
      _rawBody
      slug {
        current
      }
      image {
        alt
        asset {
          gatsbyImageData(width: 1800)
        }
      }
      subSections {
        id
        title
        description
        slug {
          current
        }
        image {
          alt
          asset {
            gatsbyImageData(width: 1800)
          }
        }
      }
    }
  }
`;
