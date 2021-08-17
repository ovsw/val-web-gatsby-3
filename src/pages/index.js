import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
// import Container from '../components/container'
import GraphQLErrorList from "../components/graphql-error-list";

import SEO from "../components/seo";
import Layout from "../containers/layout";
import Hero from "../components/hero";
import AboutArea from "../components/about-area";
import Highlights from "../components/features-area";
import ServicesArea from "../components/services-area";
import FAQArea from "../components/faq-area";
import HomeTestimonials from "../components/HomeTestimonials";

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const obtainLoanCardsContent = [
    {
      title: "1 - Choose your dream home",
      description:
        "You select a Home and discuss the purchase with the seller or selling agent. Sign a purchase contract conditioned on approval of your VA home loan",
      icon: "flaticon-life-insurence",
    },
    {
      title: "2 - Partner with a trusted lender",
      description:
        "You select a lender and present them with your Certificate of Eligibility and complete a loan application ",
      icon: "flaticon-life-insurence",
    },
    {
      title: "3 - Bring in a licensed appraiser",
      description:
        "The lender will develop all credit and income information. They will also request VA to assign a licensed appraiser to determine the reasonable value for the property. A Certificate of Reasonable Value will be issued. Note: You may be required to pay for the credit report and appraisal unless the seller agrees to pay.",
      icon: "flaticon-life-insurence",
    },
    {
      title: "4 - Wait for the loan decision",
      description:
        "The lender will let you know the decision on the loan. You should be approved if the established value and your credit and income are acceptable",
      icon: "flaticon-life-insurence",
    },
    {
      title: "5 - Celebrate the loan closing",
      description:
        "You (and spouse) attend the loan closing. The lender or closing attorney will explain the loan terms and requirements as well as where and how to make the monthly payments. Sign the note, mortgage, and other related papers.",
      icon: "flaticon-life-insurence",
    },
    {
      title: "6 - Receive the guaranty",
      description:
        "The loan is sent to VA for guaranty. Your Certificate of Eligibility is annotated to reflect the use of entitlement and returned to you.",
      icon: "flaticon-life-insurence",
    },
  ];
  const faqContent = [
    {
      question: "What is a VA Home Loan?",
      answer:
        "<p>These are special loans made by private lenders such as banks or mortgage companies and are designed specifically for veterans in mind. These work toward bringing the military families into homeownership and provide a house their family can live in for years to come.</p>",
    },
    {
      question: "What Types of VA Loans are Available?",
      answer:
        "<p>VA Home Loans are categorized as fixed-rate mortgages (FRM), adjustable-rate mortgages (ARM) or a combination of the two. Each program is used to best meet the home buying needs of veterans and active-duty military.</p>",
    },
    {
      question: "Can I Refinance a VA Loan?",
      answer:
        "<p>Yes you can! Some worry that refinancing takes too much time and money, but fortunately the process is easy. Refinancing is simply the process of paying your existing loan with a new one through the help of an experienced VA Home Loan Specialist.</p>",
    },
  ];

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />

      <Hero />
      <AboutArea />
      <Highlights />
      <ServicesArea
        sectionTitle="The VA Home Loan Journey"
        sectionSubtitle="6 Simple Steps"
        cardsContent={obtainLoanCardsContent}
      />
      <FAQArea sectionTitle="Frequently Asked Questions" faqContent={faqContent} />
      <HomeTestimonials />

      {postNodes && (
        <BlogPostPreviewGrid title="Recent Blog Posts" nodes={postNodes} browseMoreHref="/blog/" />
      )}
    </Layout>
  );
};

export default IndexPage;

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

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
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
              gatsbyImageData(width: 700)
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
  }
`;
