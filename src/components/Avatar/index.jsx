import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as S from "./styled";

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(height: 120, quality: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />;
};
export default Avatar;
