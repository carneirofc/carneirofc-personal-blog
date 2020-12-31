import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import PostItem from "../components/PostItem";

export const query = graphql`
  query PostsOnPage($limit: Int!, $skip: Int!) {
    allMarkdownRemark(limit: $limit, skip: $skip, sort: { fields: frontmatter___date, order: DESC }) {
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
  }
`;

const BlogList = (props) => {
  const postList = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            id,
            timeToRead,
            frontmatter: { background, color, category, date, description, title },
            fields: { slug },
          },
        }) => {
          return (
            <PostItem
              background={background}
              category={category}
              color={color}
              date={date}
              description={description}
              key={id}
              slug={slug}
              timeToRead={`${timeToRead} min`}
              title={title}
            />
          );
        }
      )}
    </Layout>
  );
};
export default BlogList;
