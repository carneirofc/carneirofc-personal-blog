import React from "react";
import propTypes from "prop-types";
import { Link } from "gatsby";
import * as S from "./styled";

type PaginationProps = {
  isFirst: boolean;
  isLast: boolean;
  currentPage: number;
  totalPages: number;
  prevPage: string;
  nextPage: string;
};

export const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  totalPages,
  prevPage = "#",
  nextPage = "#",
}: PaginationProps) => {
  return (
    <S.PaginationWrapper>
      {!isFirst ? (
        <Link to={prevPage}>
          <S.ArrowLeft />
        </Link>
      ) : (
        <div />
      )}
      <p>{`${currentPage}/${totalPages}`}</p>
      {!isLast ? (
        <Link to={nextPage}>
          <S.ArrowRight />
        </Link>
      ) : (
        <div />
      )}
    </S.PaginationWrapper>
  );
};
export default Pagination;
