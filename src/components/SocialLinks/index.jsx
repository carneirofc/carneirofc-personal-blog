import React from "react";
import links from "./content";

import * as S from "./styled";

const renderLink = () => {
  return links.map((data, i) => {
    const { label, url, Icon } = data;
    return (
      <S.SocialLinksItem key={i}>
        <S.SocialLinksLink href={url} title={label} target="_blank" rel="noopener noreferrer">
          <S.IconWarpper>{Icon}</S.IconWarpper>
        </S.SocialLinksLink>
      </S.SocialLinksItem>
    );
  });
};

const SocialLinks = () => {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>{renderLink()}</S.SocialLinksList>
    </S.SocialLinksWrapper>
  );
};
export default SocialLinks;
