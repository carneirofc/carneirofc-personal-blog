/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
import { GatsbyNode, PageProps, graphql } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import path from "path";
import { BlogPostRef } from "./src/interfaces/interfaces";
import { BlogListContext } from "./src/templates/blog-list";
import { BlogPostContext } from "./src/templates/blog-post";

// Templates
const blogPostTemplate = path.resolve("src/templates/blog-post.tsx");
const indexTemplate = path.resolve("./src/templates/blog-list.tsx");

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    let slugRelativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "pages",
    });

    const language: string = (node as any)?.frontmatter?.language ?? "pt_BR";
    const slugStartIndex = `xxxx-xx-xx-${language}-`.length + 1;

    const slug = `/${language}/${slugRelativeFilePath.slice(slugStartIndex)}`;
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });

    console.info(`Criando node ${slug}`);
  }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  async function GetAllPostsLanguages() {
    const res = await graphql<
      Queries.GetAllPostsLanguagesQuery,
      Queries.GetAllPostsLanguagesQueryVariables
    >(`
      query GetAllPostsLanguages {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
          edges {
            node {
              frontmatter {
                language
              }
            }
          }
        }
      }
    `);

    if (res.errors) {
      throw res.errors;
    }
    const languages = new Set<string>();
    res?.data?.allMarkdownRemark.edges.forEach((e) => {
      if (e.node?.frontmatter?.language)
        languages.add(e.node?.frontmatter?.language);
    });
    if (languages.size == 0) {
      throw "language set is empty, error when creating blog posts";
    }
    return Array.from(languages.values());
  }

  const languages = await GetAllPostsLanguages();
  let createdPosts = 0;
  for (const language of languages) {
    console.info(`generating posts written in ${language}`);
    const result: { errors?: any; data?: Queries.GetAllMarkdownNodesQuery } =
      await graphql(`
        query GetAllMarkdownNodes {
          allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { frontmatter: { language: { eq: "${language}" } } }
          ) {
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
                  language
                  description
                  title
                  color
                }
                timeToRead
                fields {
                  slug
                }
              }
              next {
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                }
              }
              previous {
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                }
              }
            }
          }
        }
      `);

    if (result.errors) {
      throw result.errors;
    }

    function createPosts() {
      const posts = result?.data?.allMarkdownRemark.edges;
      if (!posts) return;
      posts.forEach(({ node, next, previous }) => {
        createdPosts++;

        // Create blog post pages.
        const path = `${node?.fields?.slug}`;

        createPage<BlogPostContext>({
          // Path for this page — required
          path: path,
          component: blogPostTemplate,
          context: {
            slug: node?.fields?.slug ?? "",
            language: language,
            previous:
              previous != null && previous.fields?.slug
                ? {
                    description: previous.frontmatter?.description ?? "",
                    slug: previous.fields?.slug,
                    title: previous.frontmatter?.title ?? "",
                  }
                : undefined,
            next:
              next != null && next.fields?.slug
                ? {
                    description: next.frontmatter?.description ?? "",
                    slug: next.fields?.slug,
                    title: next.frontmatter?.title ?? "",
                  }
                : undefined,
          },
        });
        console.info(`Generating post "${path}"`);
      });
    }

    createPosts();
  }

  const POSTS_PER_PAGE = 15;
  const numPages = Math.ceil(createdPosts / POSTS_PER_PAGE);
  console.log(languages);
  Array.from({ length: numPages }).forEach((_, index) => {
    const path_1 = index === 0 ? "/" : `/page/${index + 1}/`;
    createPage<BlogListContext>({
      path: path_1,
      component: indexTemplate,
      context: {
        languages: languages,
        limit: POSTS_PER_PAGE,
        skip: index * POSTS_PER_PAGE,
        numPages: numPages,
        currentPage: index + 1,
      },
    });

    console.info(`Generating list "${path_1}"`);
  });
};
