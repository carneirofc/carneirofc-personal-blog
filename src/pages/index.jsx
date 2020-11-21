import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import PostItem from "../components/PostItem";

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
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
  `);
  const postList = allMarkdownRemark.edges;
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

export default IndexPage;
