import React from "react";
import propTypes from "prop-types";
import { Link } from "gatsby";
import * as S from "./styled";

const Pagination = ({ isFirst, isLast, currentPage, totalPages, prevPage = "#", nextPage = "#" }) => {
  /*
  <-
  page n / total
  ->
  */
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
Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  totalPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
};
export default Pagination;
