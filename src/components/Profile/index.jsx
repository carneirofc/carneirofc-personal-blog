import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Avatar from "../Avatar";
import * as S from "./styled";

/* import "typeface-jetbrains-mono"; */

const Profile = () => {
  const {
    site: {
      siteMetadata: { description, author, profession },
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
    <S.ProfileWrapper>
      <S.ProfileLink to="#">
        <Avatar />
        <S.ProfileAuthor>{author}</S.ProfileAuthor>
        <S.ProfileProfession>{profession}</S.ProfileProfession>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  );
};
export default Profile;
