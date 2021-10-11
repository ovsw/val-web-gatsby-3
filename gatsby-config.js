// gatsby cloud post preview to trigger deploy on content change:
// https://webhook.gatsbyjs.com/hooks/data_source/94d47276-df4b-4d9d-b368-63cc85cdf361

// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const path = require(`path`);

const config = require("./config/website");

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    siteNav: [
      {
        title: "My Story",
        slug: "/my-story/",
        children: [],
      },
      {
        title: "Apply",
        slug: "https://connect.google.com/",
        children: [],
      },
      {
        title: "VA Home Loans",
        slug: "#",
        children: [
          {
            title: "VA Loan Eligibility",
            slug: "/va-loan-eligibility/",
          },
          {
            title: "Obtaining a VA Home Loan",
            slug: "/obtaining-a-va-home-loan/",
          },
          {
            title: "After Closing: VA Home Loan FAQ",
            slug: "/va-post-loan-faq/",
          },
          {
            title: "What is a VA Jumbo Loan",
            slug: "/va-jumbo-loans/",
          },
          {
            title: "The VA Loan App – Free Mobile Tool",
            slug: "/va-loan-app-free-mobile-tool/",
          },
        ],
      },
      {
        title: "Media",
        slug: "/media/",
        children: [],
      },
      {
        title: "Loan Info",
        slug: "#",
        children: [
          {
            title: "Am I Eligible for a VA Loan?",
            slug: "/eligible-va-loan/",
          },
          {
            title: "Bad Credit Rating",
            slug: "/bad-credit-rating/",
          },
          {
            title: "Can I Buy Land with VA Loan?",
            slug: "/buy-land-va-loan/",
          },
          {
            title: "Home Improvements VA Loan Information",
            slug: "/home-improvements-va-loan/",
          },
          {
            title: "Can I Finance 2 Homes Using VA Loans?",
            slug: "/finance-2-homes-using-va-loans/",
          },
          {
            title: "Loan Programs for Veterans",
            slug: "/loan-programs/",
          },
          {
            title: "How Do VA Loan Rates Differ?",
            slug: "/va-loan-rates-differ/",
          },
          {
            title: "Different Types of VA Loans",
            slug: "/types-of-loans/",
          },
          {
            title: "VA Loan Checklist",
            slug: "/loan-checklist/",
          },
          {
            title: "Refinancing a VA Loan",
            slug: "/refinancing/",
          },
          {
            title: "VA Mortgage Terms: Glossary",
            slug: "/mortgage-terms-glossary/",
          },
        ],
      },
      {
        title: "Contact",
        slug: "/contact-me/",
        children: [],
      },
      {
        title: "VA COE",
        slug: "/va-certificate-of-eligibility/",
        children: [],
      },
      {
        title: "Blog",
        slug: "/blog/",
        children: [
          {
            title: "Types of VA Loans",
            slug: "/types-of-va-loans/",
          },
          {
            title: "Requirements",
            slug: "/requirements/",
          },
          {
            title: "Benefits",
            slug: "/benefits/",
          },
          {
            title: "Finances",
            slug: "/finances/",
          },
          {
            title: "Tips",
            slug: "/tips/",
          },
          {
            title: "Misc",
            slug: "/misc/",
          },
        ],
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5QMZ4HX",
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icons: [
          {
            src: "/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        // exclude: ['/admin', '/confirmed'],
        exclude: [
          "/blog/2/",
          "/blog/3/",
          "/blog/4/",
          "/blog/5/",
          "/blog/6/",
          "/blog/7/",
          "/blog/8/",
          "/blog/9/",
          "/blog/10/",
          "/blog/11/",
          "/blog/12/",

          "/types-of-loans/2/",
          "/types-of-loans/3/",
          "/types-of-loans/4/",
          "/types-of-loans/5/",
          "/types-of-loans/6/",
          "/types-of-loans/7/",
          "/types-of-loans/8/",
          "/types-of-loans/9/",
          "/types-of-loans/10/",
          "/types-of-loans/11/",
          "/types-of-loans/12/",

          "/finances/2/",
          "/finances/3/",
          "/finances/4/",
          "/finances/5/",
          "/finances/6/",
          "/finances/7/",
          "/finances/8/",
          "/finances/9/",
          "/finances/10/",

          "/requirements/2/",
          "/requirements/3/",
          "/requirements/4/",
          "/requirements/5/",
          "/requirements/6/",
          "/requirements/7/",
          "/requirements/8/",
          "/requirements/9/",
          "/requirements/10/",

          "/benefits/2/",
          "/benefits/3/",
          "/benefits/4/",
          "/benefits/5/",
          "/benefits/6/",
          "/benefits/7/",
          "/benefits/8/",
          "/benefits/9/",
          "/benefits/10/",

          "/tips/2/",
          "/tips/3/",
          "/tips/4/",
          "/tips/5/",
          "/tips/6/",
          "/tips/7/",
          "/tips/8/",
          "/tips/9/",
          "/tips/10/",
          "/tips/11/",
          "/tips/12/",

          "/misc/2/",
          "/misc/3/",
          "/misc/4/",
          "/misc/5/",
          "/misc/6/",
          "/misc/7/",
          "/misc/8/",
          "/misc/9/",
          "/misc/10/",
          "/misc/11/",
          "/misc/12/",
        ],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                  context {
                    seoNoIndex
                  }
                }
              }
            }
          }
        `,
        serialize: ({ site, allSitePage }) => {
          return allSitePage.edges
            .filter(({ node }) => node.context.seoNoIndex !== true)
            .map(({ node }) => {
              return {
                url: site.siteMetadata.siteUrl + node.path,
                changefreq: "daily",
                priority: 0.7,
              };
            });
        },
      },
    },
    // 'gatsby-plugin-advanced-sitemap',
    // {
    //   resolve: `gatsby-plugin-advanced-sitemap`,
    //   options: {
    //     // 1 query for each data type
    //     query: `
    //     {
    //       allSanityPage {
    //         edges {
    //           node {
    //             id
    //             slug {
    //               current
    //             }
    //           }
    //         }
    //       }
    //       allSanityPost {
    //         edges {
    //           node {
    //             id
    //             slug {
    //               current
    //             }
    //           }
    //         }
    //       }
    //     }
    //     `,

    //     exclude: [
    //       `/dev-404-page`
    //       //     /(\/)?hash-\S*/ // you can also pass valid RegExp to exclude internal tags for example
    //     ],

    //     createLinkInHead: true, // optional: create a link in the `<head>` of your site
    //     addUncaughtPages: true // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
    //   }
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // sampleRate: 5,
        // siteSpeedSampleRate: 10
      },
    },
    "gatsby-plugin-netlify",
  ],
};
