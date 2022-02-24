import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import GenericPage from "../components/generic-page";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import VrLayout from "../components/vr-section";
import VrGridItem from "../components/vr-section/vr-grid-item";

// import {toPlainText} from '../lib/helpers'

const GenericPageTemplate = (props) => {
  const { data, errors, location, pageContext } = props;
  const page = data && data.page;

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
          sectionSlug={page.section[0].slug.current}
          subSectionSlug={page.slug.current}
          image={page.image}
        >
          <ul
            role="list"
            className="grid pt-8 grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {page.videoRefs.map((videoPage, i) => {
              return (
                <VrGridItem
                  key={i}
                  image={videoPage.image}
                  title={videoPage.title}
                  description={videoPage.description}
                  link={`/video/${videoPage.subSection[0].slug.current}/${videoPage.slug.current}`}
                />
              );
            })}
          </ul>
        </VrLayout>
        // <RightSidebar title={page.title} path={location.pathname} headerImage={page.image}>

        //   <GenericPage {...page} />
        // </RightSidebar>
      )}
    </Layout>
  );
};

export default GenericPageTemplate;

export const query = graphql`
  query VrSubSectionPageTemplateQuery($id: String!) {
    page: sanityVrSubSection(id: { eq: $id }) {
      id
      seoDescription
      seoNoIndex
      seoTitle
      slug {
        current
      }
      title
      image {
        alt
        asset {
          gatsbyImageData(width: 1800)
        }
      }
      section {
        id
        title
        slug {
          current
        }
      }
      videoRefs {
        description
        id
        image {
          alt
          asset {
            gatsbyImageData(width: 1800)
          }
        }
        subSection {
          id
          title
          slug {
            current
          }
        }
        slug {
          current
        }
        title
      }
    }
  }
`;
