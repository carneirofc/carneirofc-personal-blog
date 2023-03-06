import React from "react";
import { graphql, PageProps } from "gatsby";

import { Layout, PostItem, Pagination, GlobalHead } from "../components";

export const Head = () => {
  return <GlobalHead title="About" description={""} />;
};

export const query = graphql`
  query PostsOnPage($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { frontmatter: { date: DESC } }
    ) {
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

const BlogList = ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext,
}: PageProps<Queries.PostsOnPageQuery>) => {
  const postList = edges;
  const { numPages, currentPage } = pageContext as any;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;
  postList[0].node.frontmatter?.background;
  return (
    <Layout>
      {postList.map(({ node: { id, timeToRead, frontmatter, fields } }) => {
        return (
          <PostItem
            background={frontmatter?.background ?? ""}
            category={frontmatter?.category ?? ""}
            color={frontmatter?.color ?? ""}
            date={frontmatter?.date ?? ""}
            description={frontmatter?.description ?? ""}
            key={id}
            slug={fields?.slug ?? ""}
            timeToRead={`${timeToRead} min`}
            title={frontmatter?.title ?? ""}
          />
        );
      })}
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
