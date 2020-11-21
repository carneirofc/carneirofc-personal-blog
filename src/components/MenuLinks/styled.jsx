import styled from "styled-components";
import { Link } from "gatsby";

export const MenuLinksWarpper = styled.nav`
  min-width: 80%;
`;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: #1fa2f2;
  }
`;

export const MenuLinkLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  transition: background-color 0.5s;

  border-radius: 4px;

  display: block;
  padding: 0.2rem 0;

  &:hover {
    color: #1fa1f2;
    background-color: #183755;
  }
`;
