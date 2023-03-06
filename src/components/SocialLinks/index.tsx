import { StyledIcon } from "@styled-icons/styled-icon";
import React from "react";
import { content as links, SocialIconData } from "./content";
import { Icons as icons } from "./icons";

import * as S from "./styled";

type SocialLinkProps = {
  icon: React.ReactNode;
  data: SocialIconData;
};
const SocialLink = ({ icon, data }: SocialLinkProps) => {
  const { label, url } = data;

  return (
    <S.SocialLinksItem>
      <S.SocialLinksLink
        href={url}
        title={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <S.IconWarpper>{icon}</S.IconWarpper>
      </S.SocialLinksLink>
    </S.SocialLinksItem>
  );
};

const SocialLinks = () => {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        <SocialLink icon={<icons.Github />} data={links.github} />
        <SocialLink icon={<icons.Discord />} data={links.discord} />
        <SocialLink icon={<icons.Instagram />} data={links.instagram} />
        <SocialLink icon={<icons.Linkedin />} data={links.linkedin} />
        <SocialLink icon={<icons.BattleNet />} data={links.battlenet} />
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  );
};
export default SocialLinks;
