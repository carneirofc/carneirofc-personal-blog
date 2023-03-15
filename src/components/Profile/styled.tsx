import styled from "styled-components";
import { Link } from "gatsby";

export const ProfileWrapper = styled.section`
  color: var(--text-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--text-dark);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--active);
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem auto;
  &:hover {
    color: var(--active);
  }
`;

export const ProfileProfession = styled.small`
  margin: 0.5rem 0;
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  &:hover {
    color: tomato;
  }
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  &:hover {
    color: pink;
  }
`;
