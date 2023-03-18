import React from "react";
import { graphql, PageProps } from "gatsby";

import {
  Layout,
  PostItem,
  Pagination,
  GlobalHead,
  PostItemContainer,
} from "../components";

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

export type BlogListContext = {
  numPages: number;
  currentPage: number;
  limit: number;
  skip: number;
};

const BlogList = ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext,
}: PageProps<Queries.PostsOnPageQuery, BlogListContext>) => {
  const postList = edges;
  const { numPages, currentPage } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;
  postList[0].node.frontmatter?.background;
  return (
    <Layout>
      <PostItemContainer>
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
      </PostItemContainer>
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
