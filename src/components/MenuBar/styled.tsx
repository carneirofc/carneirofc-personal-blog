import styled from "styled-components";
import { Link } from "gatsby";

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: #192734;
  border-left: 1px solid #38444d;
  box-sizing: border-box; // make padding and border be counted inside width:
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  //padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
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
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 2rem;
  padding: 0.6rem;
  position: relative;
  width: 2.25rem;

  &:hover {
    color: #1fa1f2;
  }
`;
