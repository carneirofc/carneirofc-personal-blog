import React from "react";
import { BlogPostRef } from "../../interfaces/interfaces";

import * as S from "./styled";

type RecommendedPostProps = {
  next?: BlogPostRef;
  previous?: BlogPostRef;
};

export const RecommendedPosts = ({ next, previous }: RecommendedPostProps) => {
  return (
    <S.Wrapper>
      {next ? (
        <S.PostItemLink to={next.slug}>
          <S.IconWarpper>
            <S.Icons.Backward />
          </S.IconWarpper>
          {next.title}
        </S.PostItemLink>
      ) : (
        <div></div>
      )}
      {previous ? (
        <S.PostItemLink to={previous.slug}>
          {previous.title}
          <S.IconWarpper>
            <S.Icons.Forward />
          </S.IconWarpper>
        </S.PostItemLink>
      ) : (
        <div></div>
      )}
    </S.Wrapper>
  );
};
