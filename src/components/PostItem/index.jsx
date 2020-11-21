import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const PostItem = (props) => {
  const { slug, category, background, color, title, date, timeToRead, description } = props;
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
PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostItem;
