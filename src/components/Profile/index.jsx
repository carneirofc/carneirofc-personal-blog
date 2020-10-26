import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description, author, aboutAuthor, profession },
    },
  } = useStaticQuery(graphql`
    query GetMetadata {
      site {
        siteMetadata {
          aboutAuthor
          author
          description
          profession
          title
        }
      }
    }
  `);

  return (
    <div>
      <p>
        <h1>{title}</h1>
        {description}
      </p>
      <p>
        <h2>{author}</h2>
        <h3>{profession}</h3>
        {aboutAuthor}
      </p>
    </div>
  );
};
export default Profile;
