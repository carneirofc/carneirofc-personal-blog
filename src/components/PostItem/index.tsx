import React from "react";

import * as S from "./styled";

type PostItemProps = {
  slug: string;
  category: string;
  title: string;
  date: string;
  timeToRead: string;
  description: string;
  background: string;
  color: string;
};
export const PostItem = (props: PostItemProps) => {
  const {
    slug,
    category,
    background,
    color,
    title,
    date,
    timeToRead,
    description,
  } = props;
  return (
    <S.PostItemWrapper>
      <S.PostItemLink to={slug}>
        <S.PostItemTag color={color} background={background}>
          {category}
        </S.PostItemTag>
        <S.PostItemInfo>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDate>{`${date} - ${timeToRead}`}</S.PostItemDate>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemLink>
    </S.PostItemWrapper>
  );
};

export default PostItem;
