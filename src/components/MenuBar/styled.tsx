import styled from "styled-components";
import { Link } from "gatsby";

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--background-dark);
  // border-left: 1px solid var(--border);
  box-sizing: border-box; // make padding and border be counted inside width:
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 2.5rem;
  border-left: 0;
  padding-left: 0;
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: tomato;
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
  width: 2.25rem;

  &:hover {
    color: var(--active);
  }
`;
