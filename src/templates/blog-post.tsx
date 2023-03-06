import React, { useState } from "react";
import { graphql, PageProps } from "gatsby";

import { GlobalHead, Layout, SEO, SEOProps } from "../components";
import * as S from "../components/Post/styled";

export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      timeToRead
      frontmatter {
        title
        description
        date(locale: "en-us", fromNow: false, formatString: "DD MMMM YYYY")
        category
        color
        background
      }
    }
  }
`;
export const Head = (props: PageProps<Queries.BlogPostQuery>) => {
  const frontmatter = props.data.markdownRemark?.frontmatter;
  return (
    <GlobalHead
      title={frontmatter?.title ?? ""}
      description={frontmatter?.description ?? ""}
    />
  );
};

export type BlogPostContext = { slug: string };
const BlogPost = (props: PageProps<Queries.BlogPostQuery, BlogPostContext>) => {
  const mainRef = React.useRef(null);

  const {
    data: { markdownRemark },
  } = props;
  const { frontmatter, html, timeToRead } = markdownRemark!;

  const title = frontmatter?.title ?? "";
  const date = frontmatter?.date ?? "";
  const description = frontmatter?.description ?? "";

  return (
    <Layout>
      <S.PostHeader>
        <S.PostDate>
          {date} - Time to read {timeToRead} min
        </S.PostDate>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDescription>{description}</S.PostDescription>
      </S.PostHeader>
      <S.PostMainContent>
        <div ref={mainRef} dangerouslySetInnerHTML={{ __html: html! }}></div>
      </S.PostMainContent>
    </Layout>
  );
};
export default BlogPost;
