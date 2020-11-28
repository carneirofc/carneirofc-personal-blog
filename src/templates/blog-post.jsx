import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const query = graphql`
  query DataFromSlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

const BlogPost = ({
  data: {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  },
}) => {
  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
};
export default BlogPost;
