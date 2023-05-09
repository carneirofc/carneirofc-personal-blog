import React from "react";
import { graphql, PageProps } from "gatsby";

import {
  Layout,
  PostItem,
  Pagination,
  GlobalHead,
  PostItemContainer,
  LanguageFilter,
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
            language
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
  languages: string[];
};

const BlogList = ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext,
}: PageProps<Queries.PostsOnPageQuery, BlogListContext>) => {
  const postList = edges;
  const { numPages, currentPage, languages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 2}`;
  const nextPage = `/page/${currentPage + 1}`;
  postList[0].node.frontmatter?.background;

  const navigatorLanguage = navigator.language?.replace("-", "_") ?? "en_US";
  const [selectedLanguages, setSelectedLanguages] = React.useState<string[]>(
    [...languages].sort()
  );
  return (
    <Layout
      sidebarChildren={
        <LanguageFilter
          availableLanguages={languages}
          selectedLanguages={selectedLanguages}
          setSelectedLanguages={setSelectedLanguages}
        />
      }
    >
      <PostItemContainer>
        {postList
          .filter((e) =>
            selectedLanguages.includes(e.node.frontmatter?.language ?? "")
          )
          .map(({ node: { id, timeToRead, frontmatter, fields } }) => {
            return (
              <PostItem
                language={frontmatter?.language ?? ""}
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
