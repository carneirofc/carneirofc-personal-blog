import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Avatar from "../Avatar";
/* import "typeface-jetbrains-mono"; */

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
      <div>
        <h1>{title}</h1>
        {description}
      </div>
      <div>
        <Avatar />
        <h5>{author}</h5>
        <h4>{profession}</h4>
        {aboutAuthor}
      </div>
    </div>
  );
};
export default Profile;
