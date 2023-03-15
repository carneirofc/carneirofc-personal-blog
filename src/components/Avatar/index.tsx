import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as S from "./styled";

const Avatar = () => {
  const data = useStaticQuery<Queries.AvatarQuery>(graphql`
    query Avatar {
      avatarImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 120)
        }
      }
    }
  `);
  console.info(data);
  const image = getImage(data?.avatarImage?.childImageSharp?.gatsbyImageData!)!;
  return <S.AvatarWrapper alt="Avatar image" image={image} />;
};
export default Avatar;
