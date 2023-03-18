import styled from "styled-components";
import { Link } from "gatsby";

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--background-dark);
  box-sizing: border-box; // make padding and border be counted inside width:
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 2.5rem;

  right: 0;
  top: 0;
  bottom: 0;
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
  display: block;
`;

export const MenuBarItem = styled.span`
  color: var(--text-dark);
  cursor: pointer;
  display: block;
  height: 2rem;
  padding: 0.6rem;
  position: relative;
  width: 1.8rem;

  &:hover {
    color: var(--active);
  }
`;
