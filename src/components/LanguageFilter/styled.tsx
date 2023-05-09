import styled from "styled-components";
export const Wrapper = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  font-size: var(--fs-500);
  font-weight: var(--fw-bold);
  color: var(--color-text-500);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 5px;
`;
export const ListItem = styled.div<{ checked: boolean }>`
  cursor: pointer;
  font-weight: var(--fw-bold);
  color: ${(props) => (props.checked ? `var(--color-secondary-400)` : `white`)};
  &:hover {
    color: ${(props) => (props.checked ? `var(--color-primary-400)` : `white`)};
  }
`;
export const ListItemLabel = styled.label`
  cursor: pointer;
`;
