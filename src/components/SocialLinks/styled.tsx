import styled from "styled-components";

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const SocialLinksItem = styled.li`
  border-width: 1px;
  border-color: var(--color-background-900);
  border-style: none;
  border-style: solid;
  padding: 5px;
  border-radius: 50%;

  transition: color 0.5s cubic-bezier(0.4, 0.9, 0, 1) 0s;
  &:hover {
    border-color: var(--color-background-500);
  }
`;

export const SocialLinksLink = styled.a`
  color: var(--text-dark);
  text-decoration: none;
  transition: color 0.5s cubic-bezier(0.4, 0.9, 0, 1) 0s;
  &:hover {
    color: var(--color-secondary-500);
  }
`;

export const IconWarpper = styled.div`
  fill: var(--color-text-500);
  width: 30px;
  height: 30px;
`;
