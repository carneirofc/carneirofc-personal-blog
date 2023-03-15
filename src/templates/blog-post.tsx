import React, { useState } from "react";
import { graphql, PageProps } from "gatsby";

import { GlobalHead, Layout, RecommendedPosts } from "../components";
import * as S from "../components/Post/styled";
import { BlogPostRef } from "../interfaces/interfaces";

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

export type BlogPostContext = {
  slug: string;
  next: BlogPostRef;
  previous: BlogPostRef;
};
const BlogPost = (props: PageProps<Queries.BlogPostQuery, BlogPostContext>) => {
  const mainRef = React.useRef(null);
  const { next, previous } = props.pageContext;
  console.log(props);

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
      <RecommendedPosts next={next} previous={previous} />
    </Layout>
  );
};
export default BlogPost;
