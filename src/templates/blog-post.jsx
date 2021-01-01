import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import * as S from "../components/Post/styled";

import hljs from "highlight.js";
import "highlight.js/styles/dracula.css";

export const query = graphql`
  query GetPost($slug: String!) {
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

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.mainRef = React.createRef();
    this.state = { hl: false };
  }

  componentDidMount() {
    this.highlight();
  }

  componentDidUpdate() {
    this.highlight();
  }

  highlight = () => {
    if (this.mainRef) {
      const nodes = this.mainRef.current.querySelectorAll("pre");
      nodes.forEach((node) => {
        console.log("highlight", node);
        hljs.highlightBlock(node);
      });
    }
  };

  render() {
    const {
      data: {
        markdownRemark: {
          frontmatter: { title, description, date },
          html,
          timeToRead,
        },
      },
    } = this.props;
    return (
      <Layout>
        <SEO title={title} description={description} />
        <S.PostHeader>
          <S.PostDate>
            {date} - Time to read {timeToRead} min
          </S.PostDate>
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostDescription>{description}</S.PostDescription>
        </S.PostHeader>
        <S.PostMainContent>
          <div ref={this.mainRef} dangerouslySetInnerHTML={{ __html: html }}></div>
        </S.PostMainContent>
      </Layout>
    );
  }
}
export default BlogPost;
