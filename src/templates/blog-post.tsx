import React, { useState } from "react";
import { graphql, PageProps } from "gatsby";

import { Comments, GlobalHead, Layout, RecommendedPosts } from "../components";
import * as S from "../components/Post/styled";
import { BlogPostRef } from "../interfaces/interfaces";

export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      timeToRead
      frontmatter {
        background
        category
        color
        date(locale: "en-us", fromNow: false, formatString: "DD MMMM YYYY")
        description
        language
        title
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
  language: string;
  next?: BlogPostRef;
  previous?: BlogPostRef;
};
const BlogPost = (props: PageProps<Queries.BlogPostQuery, BlogPostContext>) => {
  const mainRef = React.useRef(null);
  const { next, previous, slug } = props.pageContext;
  console.log(props);

  const {
    data: { markdownRemark },
  } = props;
  const { frontmatter, html, timeToRead } = markdownRemark!;

  const title = frontmatter?.title ?? "";
  const date = frontmatter?.date ?? "";
  const description = frontmatter?.description ?? "";
  const language = frontmatter?.language ?? "pt_BR";

  return (
    <Layout>
      <S.PostHeaderBackground />
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
      <Comments config={{ identifier: title, language, title, slug }} />
    </Layout>
  );
};
export default BlogPost;
