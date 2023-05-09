import React from "react";
import * as S from "./styled";
import { DiscussionEmbed } from "disqus-react";

export type CommentsConfig = {
  slug: string;
  language: string;
  identifier: string;
  title: string;
};
export type CommentsProps = {
  config: CommentsConfig;
};
export const Comments = ({ config }: CommentsProps) => {
  const url = `${window.location.origin}/${config.slug}`;
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>{config.title}</S.CommentsTitle>
      <DiscussionEmbed shortname={config.title} config={{ url, ...config }} />
    </S.CommentsWrapper>
  );
};
