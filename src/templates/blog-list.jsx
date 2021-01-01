import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostItem from "../components/PostItem";
import Pagination from "../components/Pagination";

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
  const { numPages, currentPage } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

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
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        totalPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};
export default BlogList;
