import styled from "styled-components";
import { Link } from "gatsby";

export const PostItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const PostItemDescription = styled.p``;

export const PostItemLanguage = styled.span``;

export const PostItemWrapper = styled(Link)`
  text-decoration: none;

  border-radius: 3px;
  border-color: var(--color-background-400);
  border-width: 1px;
  border-style: solid;

  color: var(--color-text-500);
  padding: 1rem 0.8rem;
  margin: 1rem 1rem;
  width: 300px;
  height: 230px;
  min-width: 300px;
  background-color: var(--color-background-400);

  transition: background-color 250ms, border-color 250ms, color 250ms,
    transform 150ms;

  --description-line-height: 1.2rem;

  &:hover {
    background-color: var(--color-primary-900);
    border-color: var(--color-background-900);
    color: var(--color-text-500);
    transform: translate(0px, 10px);
    height: 300px;

    ${PostItemDescription} {
      -webkit-line-clamp: 10;
      max-height: calc(var(--description-line-height) * 10);
    }

    ${PostItemLanguage} {
      font-weight: var(--fw-bold);
      color: var(--color-secondary-500);
    }
  }

  ${PostItemLanguage} {
    color: var(--color-primary-900);
    font-weight: var(--fw-bold);
  }

  ${PostItemDescription} {
    margin-top: var(--description-line-height);
    font-size: var(--fs-500);
    font-weight: var(--fw-thin);
    line-height: var(--description-line-height);
    overflow: hidden;
    text-overflow: ellipsis;

    /**Major Properties**/
    overflow: hidden;
    max-height: calc(var(--description-line-height) * 4);
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
  }
`;

export const PostItemLink = styled(Link)`
  color: var(--text-dark);

  text-decoration: none;

  &:hover {
    color: var(--color-text-900);
  }
`;

type PostItemTagProps = {
  background?: string;
};
export const PostItemTag = styled.div<PostItemTagProps>`
  display: none;
  // display: flex;
  align-items: center;
  background: ${(props) =>
    props.background ? props.background : "var(--active)"};
  border-radius: 50%;
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  aspect-ratio: 1/1;
  text-transform: uppercase;
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const PostItemTitle = styled.h1`
  font-size: var(--fs-600);
  font-weight: var(--fw-bold);
  margin: 0.2rem 0 0.5rem;
`;

export const PostItemDate = styled.time`
  font-size: var(--fs-300);
`;
