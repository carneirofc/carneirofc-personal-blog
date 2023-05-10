import React from "react";
import * as S from "./styled";
import { DiscussionEmbed } from "disqus-react";

export type CommentsConfig = {
  slug: string;
  language: string;
  title: string;
};
export type CommentsProps = {
  config: CommentsConfig;
};
export const Comments = ({ config }: CommentsProps) => {
  const url = `https://carneirofc.github.io${config.slug}`;
  return (
    <S.CommentsWrapper>
      <DiscussionEmbed
        shortname={`carneirofc`}
        config={{
          url,
          identifier: url,
          language: config.language,
          title: config.title,
        }}
      />
    </S.CommentsWrapper>
  );
};
