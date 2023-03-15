import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  align-items: center;
  background: var(--background-dark);
  border-right: 1px solid var(--border-dark);
  box-sizing: border-box; // make padding and border be counted inside width:
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
  position: fixed;
  text-align: center;
  width: 20rem;
`;
