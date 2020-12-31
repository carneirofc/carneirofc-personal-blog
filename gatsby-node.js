/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

// Templates
const blogPostTemplate = path.resolve("src/templates/blog-post.jsx");
const indexTemplate = path.resolve("./src/templates/blog-list.jsx");


// Add slug field on each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slugRelativeFilePath = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({ node, name: "slug", value: `/${slugRelativeFilePath.slice(12)}` });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              background
              category
              date(locale: "en-us", fromNow: false, formatString: "DD MMMM YYYY")
              description
              title
              color
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }`
  ).then((result) => {
    if (result.errors) { throw result.errors; }
    const posts = result.data.allMarkdownRemark.edges;

    // Create blog post pages.
    posts.forEach(({ node }) => {
      const path = `${node.fields.slug}`;
      createPage({
        // Path for this page — required
        path: path,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
        },
      });
      console.info(`Generating post "${path}"`);
    });

    const postsPerPage = 2;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
      const path = index === 0 ? '/' : `/page/${index + 1}/`;
      createPage({
        path: path,
        component: indexTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages: numPages,
          currentPage: index + 1
        }
      });

      console.info(`Generating list "${path}"`);
    });
  });
};
