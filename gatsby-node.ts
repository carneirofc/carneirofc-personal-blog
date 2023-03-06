/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
import { GatsbyNode, PageProps } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import path from "path";

// Templates
const blogPostTemplate = path.resolve("src/templates/blog-post.tsx");
const indexTemplate = path.resolve("./src/templates/blog-list.tsx");

const SLUG_START_INDEX = "xxxx-xx-xx-".length + 1;
export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slugRelativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "pages",
    });

    createNodeField({
      node,
      name: "slug",
      value: `/${slugRelativeFilePath.slice(SLUG_START_INDEX)}`,
    });
  }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const result: { errors?: any; data?: Queries.GetAllMarkdownNodesQuery } =
    await graphql(`
      query GetAllMarkdownNodes {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
          edges {
            node {
              id
              frontmatter {
                background
                category
                date(
                  locale: "en-us"
                  fromNow: false
                  formatString: "DD MMMM YYYY"
                )
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
      }
    `);
  if (result.errors) {
    throw result.errors;
  }

  const posts = result?.data?.allMarkdownRemark.edges?.forEach(({ node }) => {
    // Create blog post pages.
    const path = `${node?.fields?.slug}`;
    createPage({
      // Path for this page — required
      path: path,
      component: blogPostTemplate,
      context: {
        slug: node?.fields?.slug,
      },
    });
    console.info(`Generating post "${path}"`);
  });

  const postsPerPage = 2;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, index) => {
    const path_1 = index === 0 ? "/" : `/page/${index + 1}/`;
    createPage({
      path: path_1,
      component: indexTemplate,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages: numPages,
        currentPage: index + 1,
      },
    });

    console.info(`Generating list "${path_1}"`);
  });
};
