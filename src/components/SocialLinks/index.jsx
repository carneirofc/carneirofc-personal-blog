import React from "react";
import links from "./content";
import Icons from "./Icons";

import * as S from "./styled";

const renderLink = (Icon, data) => {
  const { label, url } = data;

  return (
    <S.SocialLinksItem>
      <S.SocialLinksLink href={url} title={label} target="_blank" rel="noopener noreferrer">
        <S.IconWarpper>
          <Icon />
        </S.IconWarpper>
      </S.SocialLinksLink>
    </S.SocialLinksItem>
  );
};

const SocialLinks = () => {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {renderLink(Icons.Github, links.github)}
        {renderLink(Icons.Discord, links.discord)}
        {renderLink(Icons.Instagram, links.instagram)}
        {renderLink(Icons.Linkedin, links.linkedin)}
        {renderLink(Icons.BattleNet, links.battlenet)}
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  );
};
export default SocialLinks;
