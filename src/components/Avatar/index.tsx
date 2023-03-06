import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as S from "./styled";

const Avatar = () => {
  const { avatarImage } = useStaticQuery<Queries.AvatarQuery>(graphql`
    query Avatar {
      avatarImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 120)
        }
      }
    }
  `);
  return (
    <S.AvatarWrapper
      alt="Avatar image"
      image={avatarImage?.childImageSharp?.gatsbyImageData!}
    />
  );
};
export default Avatar;
