import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import GenericPage from "../components/generic-page";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import VrLayout from "../components/vr-section";
import { Link } from "gatsby";

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
          <h1>SUBSECTION PAGE</h1>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {page.videoRefs.map((videoPage, i) => {
              return (
                <li key={i} className="relative">
                  <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                    {/* <img
                        src={file.source}
                        alt=""
                        className="object-cover pointer-events-none group-hover:opacity-75"
                      /> */}
                    <Link
                      as="button"
                      to={`/video/${videoPage.subSection[0].slug.current}/${videoPage.slug.current}`}
                      className="absolute inset-0 focus:outline-none"
                      type="button"
                    >
                      <span className="sr-onlys">View details for {videoPage.title}</span>
                    </Link>
                  </div>
                  <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                    {videoPage.title}
                  </p>
                  {/* <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                    {videoPage.size}
                  </p> */}
                </li>
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
