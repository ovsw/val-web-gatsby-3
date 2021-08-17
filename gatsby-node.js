const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const {format} = require('date-fns')

async function createBlogPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
            seoNoIndex
            categories {
              id
              title
              slug {
                current
              }
            }
          }
        }
      }
      allSanityCategory {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];
  const categoryEdges = (result.data.allSanityCategory || {}).edges || [];

  // create blog post pages
  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, seoNoIndex } = edge.node; // publishedAt
      // const dateSegment = format(publishedAt, 'YYYY/MM')
      // const path = `/blog/${dateSegment}/${slug.current}/`
      const path = `/${slug.current}/`;

      reporter.info(`Creating blog post page: ${path}`);

      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id, seoNoIndex }
      });
    });

  // create blog pagination pages
  const postsPerPage = 10;
  const numPages = Math.ceil(postEdges.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    const path = i === 0 ? `/blog/` : `/blog/${i + 1}/`;
    reporter.info(`Creating blog post page: ${path}`);

    createPage({
      path,
      component: require.resolve("./src/templates/blog-list-page.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    });
  });

  // Category Pages with pagination

  let categoriesWithPostsInfo = []; // empty array that will contain objects, each object being a category and its posts

  categoryEdges.map(category => {
    const currentCatId = category.node.id;
    const currentCatSlug = category.node.slug.current; // get the slug of the current category
    let postsInThisCat = 0; // initialize empty array to hold all the posts in this category

    postEdges.map(post => {
      // go through all posts
      const postCatSlug = post.node.categories[0].slug.current;
      if (postCatSlug === currentCatSlug) {
        postsInThisCat = postsInThisCat + 1;
      } // if the post is in this category, add it to postsInThisCat
    });

    // build the object that represents the category and all its posts
    const categoryWithItsPosts = {
      categoryId: currentCatId,
      categorySlug: currentCatSlug,
      categoryNumberOfPosts: postsInThisCat
    };
    // add this category
    categoriesWithPostsInfo = categoriesWithPostsInfo.concat(categoryWithItsPosts);
  });

  // now we have everything we need to create the pages for each category, with pagination
  categoriesWithPostsInfo.map(({ categoryId, categorySlug, categoryNumberOfPosts }) => {
    const catPostsPerPage = 10;
    const catNumPages = Math.ceil(categoryNumberOfPosts / catPostsPerPage);

    // crete the category's pages (with pagination)
    Array.from({ length: catNumPages }).forEach((_, i) => {
      const categoryPath = i === 0 ? `/${categorySlug}/` : `/${categorySlug}/${i + 1}/`;
      reporter.info(`Creating category page: ${categoryPath}`);

      createPage({
        path: categoryPath,
        component: require.resolve("./src/templates/category-page.js"),
        context: {
          limit: catPostsPerPage,
          skip: i * catPostsPerPage,
          catNumPages,
          catCurrentPage: i + 1,
          categoryId,
          categorySlug
        }
      });
    });
  });
}

async function createGenericPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            seoNoIndex
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const pageEdges = (result.data.allSanityPage || {}).edges || [];

  pageEdges.forEach((edge, index) => {
    const { id, slug = {}, seoNoIndex } = edge.node;
    const path = `/${slug.current}/`;

    reporter.info(`Creating generic page: ${path}`);

    createPage({
      path,
      component: require.resolve("./src/templates/generic-page.js"),
      context: { id, seoNoIndex }
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPages(graphql, actions, reporter);
  await createGenericPages(graphql, actions, reporter);

  const { createRedirect } = actions;

  const redirectsQuery = await graphql(`
    {
      sanityRedirects(_id: { eq: "redirects" }) {
        list {
          toPath
          fromPath
          isTemporary
        }
      }
    }
  `);

  if (redirectsQuery.errors) {
    throw redirectsQuery.errors;
  }

  // process redirects from Sanity
  const redirectsList = redirectsQuery.data.sanityRedirects.list || [];

  redirectsList.forEach(({ fromPath, toPath, isTemporary }) => {
    reporter.info(`Creating ${isTemporary ? "302" : "301"} redirect: ${fromPath} -> ${toPath}`);

    const isPermanent = !isTemporary;

    createRedirect({
      fromPath,
      toPath,
      isPermanent
    });
  });
};
