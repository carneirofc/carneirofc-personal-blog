import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as S from "./styled";

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 120)
        }
      }
    }
  `);
  return <S.AvatarWrapper image={avatarImage.childImageSharp.gatsbyImageData} />;
};
export default Avatar;
